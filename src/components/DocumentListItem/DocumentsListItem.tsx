import React, { FC } from 'react';
import { ListDocument } from '../../datatypes/document';

type DocumentsListItemProps = {
  document: ListDocument;
}

export const DocumentsListItem: FC<DocumentsListItemProps> = (props) => {
  const { document } = props;
  return (
    <tr>
      <td>{document.name}</td>
      <td>{document.description || 'File to configure'}</td>
      <td>{document.owner || 'Some description'}</td>
      <td>{document.dateFormatted}</td>
    </tr>
  );
};
