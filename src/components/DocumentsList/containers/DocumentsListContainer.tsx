import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { documentsActions, documentsSelectors, SortBy } from '../../../store/slices/documents';
import { limitNumber, stringToEnum, stringToNumber } from '../../../utils/transform';
import { DocumentsList } from '../DocumentsList';

export const DocumentsListContainer: FC = () => {
  const dispatch = useDispatch();

  const documents = useSelector(documentsSelectors.getDocs);
  const visibleIndex = useSelector(documentsSelectors.getVisibleIndex);
  const error = useSelector(documentsSelectors.getError);
  const isLoading = useSelector(documentsSelectors.getIsLoading);
  const documentsToShow = visibleIndex.map((index) => documents[index]);
  const documentsPerPage = 5;
  const numberOfPages = Math.ceil(documentsToShow.length / documentsPerPage);

  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageSelect = useCallback((newPageId: number) => {
    if (newPageId === 1) {
      searchParams.delete('page-id');
    } else {
      searchParams.set('page-id', `${newPageId}`);
    }
    setSearchParams(searchParams);
  }, [searchParams]);

  const handleSortByChange = useCallback((newSortBy: SortBy) => {
    if (newSortBy === SortBy.TimeStamp) {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', `${newSortBy}`);
    }
    searchParams.delete('page-id');
    setSearchParams(searchParams);
  }, [searchParams]);

  const handleFiltersApply = useCallback((
    newTimeStampFrom: number | null,
    newTimeStampTo: number | null,
  ) => {
    if (newTimeStampFrom) {
      searchParams.set('from', `${newTimeStampFrom}`);
    } else {
      searchParams.delete('from');
    }
    if (newTimeStampTo) {
      searchParams.set('to', `${newTimeStampTo}`);
    } else {
      searchParams.delete('to');
    }
    searchParams.delete('page-id');
    setSearchParams(searchParams);
  }, [searchParams]);

  const pageId = limitNumber(
    stringToNumber(searchParams.get('page-id')) || 1,
    1,
    numberOfPages,
  );
  const sortBy = stringToEnum<SortBy>(SortBy, searchParams.get('sort')) || SortBy.TimeStamp;
  const timeStampFrom = stringToNumber(searchParams.get('from')) || null;
  const timeStampTo = stringToNumber(searchParams.get('to')) || null;
  useEffect(() => {
    dispatch(documentsActions.setPageId(pageId));
    dispatch(documentsActions.setSortBy(sortBy));
    dispatch(documentsActions.setFilter({
      timeStampFrom,
      timeStampTo,
    }));
  },
  [
    pageId,
    sortBy,
    timeStampFrom,
    timeStampTo,
  ]);

  return (
    <DocumentsList
      timeStampFrom={timeStampFrom}
      timeStampTo={timeStampTo}
      documents={documentsToShow}
      error={error}
      isLoading={isLoading}
      pageId={pageId}
      numberOfPages={numberOfPages}
      documentsPerPage={5}
      sortBy={sortBy}
      onPageSelect={handlePageSelect}
      onFiltersApply={handleFiltersApply}
      onSortByChange={handleSortByChange}
    />
  );
};
