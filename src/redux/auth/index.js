import * as t from '../../features/MainPage/actions/action-types/auth-actions';

export const initialState = {
  authenticated: false,
  error: '',
  user: {},
  loading: false,
  reseted: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case t.AUTHENTICATE_REQUEST:
      return { ...state, authenticated: false, loading: true };
    case t.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };
    case t.AUTHENTICATE_FAILURE:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
        loading: false,
      };
    case t.LOGOUT_REQUEST:
      return { ...initialState, loading: true };
    case t.LOGOUT_SUCCESS:
      return { ...initialState };
    case t.LOGOUT_FAILURE:
      return { ...initialState, error: action.payload };
    case t.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        reseted: false,
      };
    case t.FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, reseted: true };
    case t.FORGOT_PASSWORD_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
