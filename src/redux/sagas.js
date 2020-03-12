import { all, fork } from 'redux-saga/effects';
import catSaga from './cat/saga';
import personSaga from './person/saga';
import authSaga from './auth/saga';

export default function* root() {
  yield all([fork(catSaga), fork(personSaga), fork(authSaga)]);
}
