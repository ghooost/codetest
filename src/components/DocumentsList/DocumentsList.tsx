import React, { FC, useCallback } from 'react';
import { ListDocument } from '../../datatypes/document';
import { SortBy } from '../../store/slices/documents';
import { DocumentsListItem } from '../DocumentListItem';
import { Filter } from '../Filter';
import { Pages } from '../Pages';

import './styles.css';

type DocumentsListProps = {
  documents: ListDocument[];
  error: string | null;
  isLoading: boolean;
  timeStampFrom: number | null;
  timeStampTo: number | null;
  sortBy: SortBy;
  pageId: number;
  numberOfPages: number;
  documentsPerPage: number;
  onFiltersApply: (timeStampFrom: number | null, timeStampTo: number | null) => void;
  onSortByChange: (sortBy: SortBy) => void;
  onPageSelect: (pageId: number) => void;
}

export const DocumentsList: FC<DocumentsListProps> = (props) => {
  const {
    documents,
    error,
    isLoading,
    timeStampFrom,
    timeStampTo,
    pageId,
    sortBy,
    numberOfPages,
    documentsPerPage,
    onFiltersApply,
    onSortByChange,
    onPageSelect,
  } = props;
  const handleSortByName = useCallback(() => {
    onSortByChange(SortBy.Name);
  }, [onSortByChange]);
  const handleSortByDate = useCallback(() => {
    onSortByChange(SortBy.TimeStamp);
  }, [onSortByChange]);
  const handlePageSelect = useCallback((newPageId: number) => {
    onPageSelect(newPageId);
  }, [onPageSelect]);
  const startDocumentIndex = documentsPerPage * (pageId - 1);
  return (
    <div className="documents-list">
      {!isLoading && error === null && (
        <>
          <Filter
            timeStampFrom={timeStampFrom}
            timeStampTo={timeStampTo}
            onApply={onFiltersApply}
          />
          <div className="documents-list-field">
            <table className="documents-list-table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    onClick={handleSortByName}
                    className={`documents-list-table-sort ${sortBy === SortBy.Name ? 'documents-list-table-sort__selected' : ''}`}
                  >
                    Document name
                  </th>
                  <th scope="col">Description</th>
                  <th scope="col">Owner</th>
                  <th
                    scope="col"
                    onClick={handleSortByDate}
                    className={`documents-list-table-sort ${sortBy === SortBy.TimeStamp ? 'documents-list-table-sort__selected' : ''}`}
                  >
                    Created on
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents
                  .slice(startDocumentIndex, startDocumentIndex + documentsPerPage)
                  .map((document) => (
                    <DocumentsListItem key={document.id} document={document} />
                  ))}
              </tbody>
            </table>
            <Pages
              numberOfPages={numberOfPages}
              pageId={pageId}
              onPageSelect={handlePageSelect}
            />
          </div>
        </>
      )}
      {isLoading && (
      <div className="documents-list-loading" />
      )}
      {error !== null && (
      <div className="documents-list-error" />
      )}
    </div>
  );
};
