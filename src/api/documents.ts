import { ListDocumentRaw } from '../datatypes/document';

export type apiFetchDocumentsResponce = {
  documents: ListDocumentRaw[];
};

export const apiFetchDocuments = async ():Promise<apiFetchDocumentsResponce> => {
  const responce = await fetch('/documents.json');
  return responce.json();
};
