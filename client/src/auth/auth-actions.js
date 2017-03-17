import axios from 'axios'
import cookie from 'react-cookie'
import { LOGIN, LOGOUT, REGISTER, VERIFY, UPDATE, EDIT_USER, COPY_USER } from './auth-constants'
import config, { API_URL, CLIENT_ROOT_URL } from '../config'
import action from '../redux/action'
const axiosAuth = config.axios(cookie.load('token'))

export function verify() {
  return (dispatch) => {
    return action({
      dispatch,
      request: axiosAuth.post,
      url: `auth/verify`,
      type: VERIFY
    })
    .catch(error => {
      if(error.message === "Token has expired") {
        dispatch(logout())
      }
    })
  }
}


export function update(updates, id) {
  return (dispatch) => {
    return action({
      dispatch,
      request: axiosAuth.post,
      url: `users/update/${id}`,
      body: updates,
      type: UPDATE
    })
  }
}

export function login(email, password) {
  return (dispatch) => {
    return action({
      dispatch,
      request: axios.post,
      url: `${API_URL}/auth/login`,
      body: { email, password },
      type: LOGIN
    })
    .then((response) => {
      cookie.save('token', response.data.token, { path: '/' });
      window.location.href = CLIENT_ROOT_URL + response.data.user.id
    })
  }
}

export function register ({firstName, lastName, email, password}) {
  return (dispatch) => {
    return action({
      dispatch,
      request: axios.post,
      url: `${API_URL}/auth/register`,
      body: { firstName, lastName, email, password },
      type: REGISTER
    })
    .then((response) => {
      cookie.save('token', response.data.token, { path: '/' });
      window.location.href = CLIENT_ROOT_URL + response.data.user.id
    })
  }
}

export function logout () {
  return (dispatch) => {
    dispatch({type: LOGOUT});
    cookie.remove('token', { path: '/' });
  }
}

export function editUser(updates) {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      data: updates
    });
  }
}

export function copyUser() {
  return (dispatch) => {
    dispatch({type: COPY_USER});
  }
}
