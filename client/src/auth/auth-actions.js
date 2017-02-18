import { LOGIN, LOGOUT, REGISTER } from './auth-constants'

const API_URL = '/api'

//export function login(status, payload) {
//  if(status === undefined) {
//    return {
//      type: LOGIN
//    }
//  else {
//    return {
//      type: LOGIN,
//      status: status,
//      payload: payload
//    }
//  }
//}

export function login({ email, password }) {  

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
      //window.location.href = CLIENT_ROOT_URL + '/dashboard';
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
