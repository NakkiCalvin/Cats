import { put, takeLatest, all } from 'redux-saga/effects';
import * as type from '../../features/MainPage/actions/action-types/cat-actions';
import * as actions from '../../features/MainPage/actions/catActions';

function* onFetch(action) {
  try {
    // yield put(actions.removeItem(action.id));
  } catch (error) {}
}

export default function* catSaga() {
  yield all([takeLatest(type.ADD_CAT_REQUEST, onFetch)]);
}
