import { put, takeLatest, all, call } from 'redux-saga/effects';
import http from '../../http';
import * as actions from '../../features/MainPage/actions/authActions';
import * as t from '../../features/MainPage/actions/action-types/auth-actions';

function* fetchSignIn(action) {
  try {
    // const response = yield call(http.get, 'api/auth/signin', {
    //   params: {
    //     pageSize,
    //     pageNumber: page + 1,
    //     status,
    //     name,
    //     orderBy: sortField,
    //     desc,
    //   },
    // });
    // const { data, paging } = response.data;
    console.log('action Auth', action.payload);

    const response = yield call(http, {
      method: 'post',
      url: 'api/customers',
      data: action.payload,
    });

    const customer = response.data;
    console.log('customer', customer);

    yield put({
      type: t.AUTHENTICATE_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    const response = error.response || { data: {} };
    yield put({
      type: t.AUTHENTICATE_FAILURE,
      error: response.data ? response.data.message : error.message,
    });
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(t.AUTHENTICATE_REQUEST, fetchSignIn),
    // takeLatest(actions.updateCardDetails, fetchUpdateCardDetails),
  ]);
}
