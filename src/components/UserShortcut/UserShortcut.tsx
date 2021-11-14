import React, { FC } from 'react';
import { User, UserRole } from '../../datatypes/user';

import './styles.css';
import bell from './img/bell.svg';
import arrow from './img/arrow.svg';

type UserShortcutProps = {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  isMobile: boolean;
}

const rolesMap = {
  [UserRole.Internal]: 'Internal',
  [UserRole.Investor]: 'Investor',
};

export const UserShortcut: FC<UserShortcutProps> = (props) => {
  const {
    user, error, isLoading, isMobile,
  } = props;
  return (
    <div className={`user ${isMobile ? 'user__mobile' : ''}`}>
      {!isLoading && error === null && (
      <>
        <div className="user-bell">
          <img src={bell} alt="" />
        </div>
        <div className="user-logo">
          {`${user?.profile.firstName.charAt(0)}${user?.profile.lastName.charAt(0)}`}
        </div>
        <div className="user-info">
          <div className="user-info-name">
            <div className="user-info-name-first">
              {user?.profile.firstName}
            </div>
            <div className="user-info-name-last">
              {user?.profile.lastName}
            </div>
          </div>
          <div className="user-info-role">
            {user?.roles.map((role) => rolesMap[role]).join(', ')}
          </div>
        </div>
        <div className="user-arrow">
          <img src={arrow} alt="" />
        </div>
      </>
      )}
      {isLoading && (
      <div className="user-loading" />
      )}
      {error !== null && (
      <div className="user-error" />
      )}
    </div>
  );
};
