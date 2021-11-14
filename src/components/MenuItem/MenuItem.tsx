import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinkClassSelector } from '../../utils/router';

import './styles.css';

type MenuItemProps = {
  name: string;
  to: string;
  ico: string;
}

const classNameFn = navLinkClassSelector('menu-item', 'menu-item__selected');

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { name, to, ico } = props;
  return (
    <NavLink to={to} className={classNameFn}>
      <span className="menu-item-icon">
        <img src={ico} alt="" />
      </span>
      <span className="menu-item-label">{name}</span>
    </NavLink>
  );
};
