/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import { MenuItem } from '../MenuItem';

import './styles.css';
import homeIco from './img/home.svg';
import documentsIco from './img/documents.svg';
import contactsIco from './img/contacts.svg';
import burgerIco from './img/burger.svg';
import { UserShortcutContainer } from '../UserShortcut';

const visibleCheckId = 'menuOpenCheck';

export const Menu: FC = () => (
  <div className="menu">
    <label htmlFor={visibleCheckId} className="menu-button-open">
      <img src={burgerIco} alt="" />
    </label>
    <input type="checkbox" id={visibleCheckId} className="menu-open-control" />
    <nav className="menu-panel">
      <MenuItem name="Home" to="/" ico={homeIco} isEnd />
      <MenuItem name="Documents" to="/documents" ico={documentsIco} />
      <MenuItem name="Contacts" to="/contacts" ico={contactsIco} />
      <UserShortcutContainer isMobile />
    </nav>
  </div>
);
