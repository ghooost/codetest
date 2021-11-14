import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { configureStore } from '@reduxjs/toolkit';

import { documentsSaga } from './sagas/documents';
import documentsSlice from './slices/documents';
import { userSaga } from './sagas/user';
import userSlice from './slices/user';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    documentsSaga(),
    userSaga(),
  ]);
}

export const store = configureStore({
  reducer: {
    documentsSlice,
    userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
