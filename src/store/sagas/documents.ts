import {
  call, put, takeEvery, select,
} from 'redux-saga/effects';
import dateFormat from 'dateformat';
import { PayloadAction } from '@reduxjs/toolkit';
import { ListDocument, ListDocumentRaw } from '../../datatypes/document';
import { apiFetchDocuments, apiFetchDocumentsResponce } from '../../api/documents';
import { documentsActions, documentsSelectors, SortBy } from '../slices/documents';
import { genearateSortFn } from '../../utils/sort';

function* fetchDocuments() {
  try {
    const responce: apiFetchDocumentsResponce = yield call(apiFetchDocuments);
    yield put(documentsActions.setDocumentsRaw(responce.documents));
  } catch (err) {
    yield put(documentsActions.setError('something happend'));
  }
}

function* setDocumentsRaw({ payload }: PayloadAction<ListDocumentRaw[]>) {
  try {
    const validNameRegExp = /(\.pdf|\.doc)$/i;
    const documents: ListDocument[] = payload
      .filter(({ name }) => validNameRegExp.test(name))
      .map((document, index) => {
        const dateObject = new Date(document.date);

        return {
          ...document,
          id: `${index}`,
          timeStamp: dateObject.getTime(),
          dateFormatted: dateFormat(dateObject, 'dd-mm-yyyy'),
        };
      });
    yield put(documentsActions.setDocuments(documents));
  } catch (err) {
    yield put(documentsActions.setError('something happend'));
  }
}

function* applyFilters() {
  try {
    const documents: ListDocument[] = yield select(documentsSelectors.getDocs);
    const timeStampFrom: number | null = yield select(documentsSelectors.getTimeStampFrom);
    const timeStampTo: number | null = yield select(documentsSelectors.getTimeStampTo);
    const sortBy: SortBy = yield select(documentsSelectors.getSortBy);

    const visibleIndex = documents.reduce((acc, { timeStamp }, index) => {
      if (timeStampFrom !== null && timeStamp < timeStampFrom) {
        return acc;
      }
      if (timeStampTo !== null && timeStamp > timeStampTo) {
        return acc;
      }
      acc.push(index);
      return acc;
    }, [] as number[]);

    const sortFn = genearateSortFn(documents, sortBy, sortBy === SortBy.TimeStamp);
    visibleIndex.sort(sortFn);
    yield put(documentsActions.setVisibleIndex(visibleIndex));
  } catch (err) {
    yield put(documentsActions.setError('something happend'));
  }
}

export function* documentsSaga() {
  yield takeEvery(documentsActions.fetchDocuments, fetchDocuments);
  yield takeEvery(documentsActions.setDocumentsRaw, setDocumentsRaw);
  yield takeEvery(documentsActions.setDocuments, applyFilters);
  yield takeEvery(documentsActions.setFilter, applyFilters);
  yield takeEvery(documentsActions.setSortBy, applyFilters);
  yield put(documentsActions.fetchDocuments());
}
