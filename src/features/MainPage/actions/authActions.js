import * as t from './action-types/auth-actions';

export const authenticate = data => {
  return {
    type: t.AUTHENTICATE_REQUEST,
    payload: data,
  };
};
export const ForgotPassword = data => {
  return {
    type: t.FORGOT_PASSWORD_REQUEST,
    payload: data,
  };
};
