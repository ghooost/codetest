import React, { FC } from 'react';

import './styles.css';
import { Link } from 'react-router-dom';
import logo from './img/Company.svg';
import { UserShortcutContainer } from '../UserShortcut';

export const Header: FC = () => (
  <header className="header">
    <Link to="/" className="header-logo">
      <img src={logo} className="header-logo-image" alt="logo" />
    </Link>
    <UserShortcutContainer isMobile={false} />
  </header>
);
