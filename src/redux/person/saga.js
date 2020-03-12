import { put, takeLatest, all } from 'redux-saga/effects';
import * as type from '../../features/MainPage/actions/action-types/persons-actions';
import * as actions from '../../features/MainPage/actions/personActions';

function* onFetch(action) {
  try {
    // yield put(actions.removeItem(action.id));
  } catch (error) {}
}

export default function* personSaga() {
  yield all([takeLatest(type.ADD_PERSON_REQUEST, onFetch)]);
}
