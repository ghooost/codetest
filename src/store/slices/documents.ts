/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListDocument, ListDocumentRaw } from '../../datatypes/document';

import type { RootState } from '../index';

export enum SortBy {
  Name = 'name',
  TimeStamp = 'timeStamp',
}

type DocumentsSlice = {
  visibleIndex: number[];
  docs: ListDocument[];
  timeStampFrom: number | null;
  timeStampTo: number | null;
  sortBy: SortBy;
  PageId: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: DocumentsSlice = {
  visibleIndex: [],
  docs: [],
  timeStampFrom: null,
  timeStampTo: null,
  sortBy: SortBy.TimeStamp,
  PageId: 1,
  isLoading: false,
  error: null,
};

export type SetFilterPayload = {
  timeStampFrom: number | null;
  timeStampTo: number | null;
}

const slice = createSlice({
  name: 'documentsSlice',
  initialState,
  reducers: {
    fetchDocuments: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setDocumentsRaw: (_state, _: PayloadAction<ListDocumentRaw[]>) => {
      //
    },
    setPageId: (state, { payload }: PayloadAction<number>) => {
      state.PageId = payload;
    },
    setDocuments: (state, { payload }: PayloadAction<ListDocument[]>) => {
      state.docs = payload;
      state.visibleIndex = [];
      state.isLoading = false;
    },
    setVisibleIndex: (state, { payload }: PayloadAction<number[]>) => {
      state.visibleIndex = payload;
      state.PageId = 1;
      state.isLoading = false;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
    setFilter: (state, { payload }: PayloadAction<SetFilterPayload>) => {
      state.visibleIndex = [];
      state.PageId = 1;
      state.timeStampFrom = payload.timeStampFrom;
      state.timeStampTo = payload.timeStampTo;
    },
    setSortBy: (state, { payload }: PayloadAction<SortBy>) => {
      state.PageId = 1;
      state.sortBy = payload;
    },
  },
});

export const documentsSelectors = {
  getDocs: ({ documentsSlice }: RootState) => documentsSlice.docs,
  getVisibleIndex: ({ documentsSlice }: RootState) => documentsSlice.visibleIndex,
  getSortBy: ({ documentsSlice }: RootState) => documentsSlice.sortBy,
  getPageId: ({ documentsSlice }: RootState) => documentsSlice.PageId,
  getTimeStampFrom: ({ documentsSlice }: RootState) => documentsSlice.timeStampFrom,
  getTimeStampTo: ({ documentsSlice }: RootState) => documentsSlice.timeStampTo,
  getIsLoading: ({ documentsSlice }: RootState) => documentsSlice.isLoading,
  getError: ({ documentsSlice }: RootState) => documentsSlice.error,
};

export const documentsActions = slice.actions;

export default slice.reducer;
