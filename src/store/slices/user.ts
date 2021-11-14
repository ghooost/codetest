/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../datatypes/user';

import type { RootState } from '../index';

type UserSlice = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    fetchUser: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.isLoading = false;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const userSelectors = {
  getUser: ({ userSlice }: RootState) => userSlice.user,
  getIsLoading: ({ userSlice }: RootState) => userSlice.isLoading,
  getError: ({ userSlice }: RootState) => userSlice.error,
};

export const userActions = slice.actions;

export default slice.reducer;
