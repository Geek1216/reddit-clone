import * as Api from '../api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export function loginWithEmail(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const { token } = await Api.loginWithEmail(email, password);
      const response = await Api.fetchUserProfile();
      dispatch({ type: LOGIN_SUCCESS, payload: { ...response, token } });
      return response;
    } catch (e) {
      dispatch({ type: LOGIN_FAILURE, payload: e });
      throw e;
    }
  };
}

export function signupWithEmail(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGNUP_REQUEST });
      const { token } = await Api.registerWithEmail(email, password);
      const response = await Api.fetchUserProfile();
      dispatch({ type: SIGNUP_SUCCESS, payload: { ...response, token } });
      return response;
    } catch (e) {
      dispatch({ type: SIGNUP_FAILURE, payload: e });
      throw e;
    }
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
  };
}
