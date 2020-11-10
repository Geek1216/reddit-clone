export const TEST_EMAIL = 'user@email.com';
export const TEST_PASSWORD = 'password';
export const TEST_USER_PROFILE = {
  id: 1,
  email: TEST_EMAIL,
  firstName: 'Dev',
  lastName: 'User',
  title: 'Developer'
};

export const LOGIN_SUCCESS_RESPONSE = {
  token: 'SOME_TOKEN'
};
export const LOGIN_FAILURE_RESPONSE = Error('Invalid email or password');
export const SIGNUP_SUCCESS_RESPONSE = {
  token: 'SOME_TOKEN'
};
export const SIGNUP_FAILURE_RESPONSE = Error('Password should be more than 8 characters');

export const TEST_POSTS = [
  {
    id: 1,
    timestamp: '16 hours ago',
    content: 'EU proposal to ban encryption for chat apps',
    image: 'https://material-ui.com/static/images/cards/paella.jpg',
  },
  {
    id: 2,
    timestamp: '2 days ago',
    content: 'This is a test post',
  },
  {
    id: 3,
    timestamp: 'last week',
    content: 'An old post test',
  }
];
