import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  STORE_USER_DATA
} from '../actions/auth-action';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, authenticated: true };

    case USER_LOGGED_OUT:
      return { ...state, authenticated: false };

    case STORE_USER_DATA:
      return { ...state, userData: action.payload };

    default: return state;
  }
}