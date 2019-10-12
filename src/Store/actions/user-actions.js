import superagent from 'superagent';

const { AUTH_API } = process.env;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user.token,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

function requestSignup(creds) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveSignup(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user.token,
  };
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

export function signinUser(creds) {
  return (dispatch) => {
    dispatch(requestLogin(creds));

    return superagent.post(`${AUTH_API}/signin`)
      .auth(creds.username, creds.password)
      .then((response) => response.json()
        .then((user) => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(response));
          return Promise.reject(response);
        } 
        // If login was successful, set the token in local storage
        localStorage.setItem('token', user.token);
        // Dispatch the success action
        dispatch(receiveLogin(user));
        return 'success';
      })
      .catch((err) => console.log('Error: ', err));
  };
}

export function signupUser(creds) {
  return (dispatch) => {
    dispatch(requestSignup(creds));

    return superagent.post(`${AUTH_API}/signup`)
      .auth(creds.username, creds.password)
      .then((response) => response.json()
        .then((user) => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(signupError(response));
          return Promise.reject(response);
        }
        // If login was successful, set the token in local storage
        localStorage.setItem('token', user.token);
        // Dispatch the success action
        dispatch(receiveSignup(user));
        return 'success';
      })
      .catch((err) => console.log('Error: ', err));
  };
}
