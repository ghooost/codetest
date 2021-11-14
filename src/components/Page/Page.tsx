import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { ContactsContent } from '../ContactsContent';
import { DocumentsContent } from '../DocumentsContent';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { HomeContent } from '../HomeContent';
import { Menu } from '../Menu';

import './styles.css';

export const Page: FC = () => (
  <div className="page">
    <Header />
    <div className="page-wrap">
      <Menu />
      <section className="page-content-wrap">
        <div className="page-content-main">
          <Routes>
            <Route path="/documents" element={<DocumentsContent />} />
            <Route path="/contacts" element={<ContactsContent />} />
            <Route path="" element={<HomeContent />} />
          </Routes>
        </div>
        <Footer />
      </section>
    </div>
  </div>
);
