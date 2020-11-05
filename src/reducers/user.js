import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
} from '../actions';

const initialState = {
  loading: false,
  loggedIn: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        data: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        data: payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGOUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};
