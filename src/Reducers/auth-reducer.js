
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,
} from '../Store/actions/user-actions';

export default (state = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token'),
}, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '', 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: payload,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '', 
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
