import axios from 'axios'
import cookie from 'react-cookie'
import { LOGIN, LOGOUT, REGISTER, VERIFY } from './auth-constants'
import { API_URL, CLIENT_ROOT_URL } from '../config'
import action from '../redux/action'

export function verify(token) {
  const axiosAuth = axios.create({
    baseURL: API_URL,
    headers: {'Authorization': token}
  });
  return (dispatch) => {
    return action({
      dispatch,
      request: axiosAuth.post,
      url: `${API_URL}/auth/verify`,
      body: { token },
      type: VERIFY
    })
    .catch(error => {
      if(error.message === "Token has expired") {
        dispatch(logout())
      }
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
      window.location.href = CLIENT_ROOT_URL + response.data.id
    })
  }
}

export function register (firstName, lastName, email, password) {
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
      window.location.href = CLIENT_ROOT_URL + response.data.id
    })
  }
}

export function logout () {
  return (dispatch) => {
    dispatch({type: LOGOUT});
    cookie.remove('token', { path: '/' });
  }
}
