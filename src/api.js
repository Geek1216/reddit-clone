const TEST_EMAIL = 'user@email.com';
const TEST_PASSWORD = 'password';

const LOGIN_SUCCESS_RESPONSE = {
  token: 'SOME_TOKEN'
};
const LOGIN_FAILURE_RESPONSE = Error('Invalid email or password');
const SIGNUP_SUCCESS_RESPONSE = {
  token: 'SOME_TOKEN'
};
const SIGNUP_FAILURE_RESPONSE = Error('Password should be more than 8 characters');
const TEST_USER_PROFILE = {
  id: 1,
  email: TEST_EMAIL,
  firstName: 'Dev',
  lastName: 'User',
  title: 'Developer'
};

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
