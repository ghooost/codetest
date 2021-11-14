import React, { FC } from 'react';
import { DocumentsListContainer } from '../DocumentsList';
import { Title } from '../Title';

import ico from './img/title.svg';

export const DocumentsContent: FC = () => (
  <>
    <Title
      title="Documents"
      subTitle="Managing all your documents in one place"
      ico={ico}
    />
    <DocumentsListContainer />
  </>
);
