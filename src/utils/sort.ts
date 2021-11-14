import { ListDocument } from '../datatypes/document';
import { SortBy } from '../store/slices/documents';

export const genearateSortFn = (documents: ListDocument[], sortBy: SortBy, isReverse: boolean) => {
  const greaterValue = isReverse ? -1 : 1;
  return (a: number, b: number) => {
    const factorA = documents[a][sortBy];
    const factorB = documents[b][sortBy];
    if (factorA === factorB) {
      return 0;
    }
    if (factorA > factorB) {
      return greaterValue;
    }
    return -greaterValue;
  };
};
