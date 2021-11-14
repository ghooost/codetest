import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../store/slices/user';
import { UserShortcut } from '../UserShortcut';

type UserShortcutContainerProps = {
  isMobile: boolean;
}

export const UserShortcutContainer: FC<UserShortcutContainerProps> = (props) => {
  const { isMobile } = props;
  const user = useSelector(userSelectors.getUser);
  const error = useSelector(userSelectors.getError);
  const isLoading = useSelector(userSelectors.getIsLoading);
  return (
    <UserShortcut
      user={user}
      isMobile={isMobile}
      error={error}
      isLoading={isLoading}
    />
  );
};
