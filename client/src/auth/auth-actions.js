import { LOGIN, LOGOUT, REGISTER } from './auth-constants'
import axios from 'axios'
import cookie from 'react-cookie'
import { API_URL, CLIENT_ROOT_URL } from '../config'

export function login(email, password) {
  return (dispatch) => {
    dispatch({type: LOGIN});
    axios.post(`${API_URL}/auth/login`, { email, password })
    .then(response => {
      dispatch({
        type: LOGIN,
        status: 'success',
        payload: response.data.user
      });
      console.log(response)
      cookie.save('token', response.data.token, { path: '/' });
      window.location.href = CLIENT_ROOT_URL + '/' + response.data.user.id;
    })
    .catch((error) => {
      dispatch({
        type: LOGIN,
        status: 'error',
        payload: error
      });
    });
  }
}

export function register (firstName, lastName, email, password) {
  return (dispatch) => {
    dispatch({type: REGISTER});
    axios.post(`${API_URL}/auth/register`, { firstName, lastName, email, password })
    .then(response => {
      dispatch({
        type: REGISTER,
        status: 'success',
        payload: response.data.user
      });
      cookie.save('token', response.data.token, { path: '/' });
      window.location.href = CLIENT_ROOT_URL + '/' + response.data.user.id;
    })
    .catch((error) => {
      dispatch({
        type: REGISTER,
        status: 'error',
        payload: error
      });
    });
  }
}
