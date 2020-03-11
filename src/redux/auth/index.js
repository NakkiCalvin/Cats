import { takeEvery } from 'redux-saga/effects';

// import http from '../../http';

const AUTHENTICATE_REQUEST = 'auth/AUTHENTICATE_REQUEST';
const AUTHENTICATE_SUCCESS = 'auth/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_FAILURE = 'auth/AUTHENTICATE_FAILURE';

const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE ';

const FORGOT_PASSWORD_REQUEST = 'auth/FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'auth/FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAILURE = 'auth/FORGOT_PASSWORD_FAILURE';

const initialState = {
  authenticated: false,
  error: '',
  user: {},
  loading: false,
  reseted: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTHENTICATE_REQUEST:
      return { ...state, authenticated: false, loading: true };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state, authenticated: true, user: action.payload, loading: false,
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state, authenticated: false, error: action.payload, loading: false,
      };
    case LOGOUT_REQUEST:
      return { ...initialState, loading: true };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    case LOGOUT_FAILURE:
      return { ...initialState, error: action.payload };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state, error: '', loading: true, reseted: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, reseted: true };
    case FORGOT_PASSWORD_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const authenticate = (credentials) => {

};

export const ForgotPassword = (username) => {

};

export const requestCheckAuthentication = () => {

};

// <<<WORKERS>>>
function* logout() {
  // try {

  // } catch () {

  // }
}

// <<<WATCHERS>>>
export function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

