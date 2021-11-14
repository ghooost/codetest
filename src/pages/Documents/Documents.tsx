import React, { FC } from 'react';
import { DocumentsListContainer } from '../../components/DocumentsList';
import { Layout } from '../../components/Layout';

export const Documents: FC = () => (
  <Layout
    title="Documents"
    description="Managing all your documents in one place"
  >
    <DocumentsListContainer />
  </Layout>
);
