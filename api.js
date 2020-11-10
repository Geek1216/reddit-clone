import {
  TEST_EMAIL,
  TEST_PASSWORD,
  TEST_USER_PROFILE,
  LOGIN_SUCCESS_RESPONSE,
  LOGIN_FAILURE_RESPONSE,
  SIGNUP_SUCCESS_RESPONSE,
  SIGNUP_FAILURE_RESPONSE,
} from './testdata';

export function loginWithEmail(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === TEST_EMAIL && password === TEST_PASSWORD) {
        resolve(LOGIN_SUCCESS_RESPONSE);
      } else {
        reject(LOGIN_FAILURE_RESPONSE);
      }
    }, 2000);
  });
}

export function registerWithEmail(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password.length >= 8) {
        resolve(SIGNUP_SUCCESS_RESPONSE);
      } else {
        reject(SIGNUP_FAILURE_RESPONSE);
      }
    }, 2000);
  });
}

export function fetchUserProfile () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TEST_USER_PROFILE);
    }, 1000);
  });
}
