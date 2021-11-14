import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { Contacts } from './Contacts';
import { Documents } from './Documents';
import { Home } from './Home';

export const Pages: FC = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/documents" element={<Documents />} />
    <Route path="/contacts" element={<Contacts />} />
  </Routes>
);
