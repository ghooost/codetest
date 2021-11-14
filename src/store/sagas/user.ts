import { call, put, takeEvery } from 'redux-saga/effects';
import { apiFetchInfo, apiFetchInfoResponce } from '../../api/info';
import { userActions } from '../slices/user';

function* fetchUser() {
  try {
    const responce: apiFetchInfoResponce = yield call(apiFetchInfo);
    yield put(userActions.setUser(responce.body.User));
  } catch (err) {
    yield put(userActions.setError('something happend'));
  }
}

export function* userSaga() {
  yield takeEvery(userActions.fetchUser, fetchUser);
  yield put(userActions.fetchUser());
}
