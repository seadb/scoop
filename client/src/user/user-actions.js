import { GET_USER } from './user-constants'
import axios from 'axios'
import { API_URL } from '../config'
import action from '../redux/action'

export function getUser(id) {
  return (dispatch) => {
    action(dispatch, axios.get, GET_USER, `${API_URL}/users/${id}`, 'response.data.user');
  }
}

//export function getUser(id) {
//  return (dispatch) => {
//    dispatch({type: GET_USER})
//    axios.get(`${API_URL}/users/${id}`)
//    .then(response => {
//      dispatch({
//        type: GET_USER,
//        status: 'success',
//        user: response.data.user
//      });
//      //cookie.save('token', response.data.token, { path: '/' });
//      //window.location.href = CLIENT_ROOT_URL + '/dashboard';
//    })
//    .catch((error) => {
//      dispatch({
//        type: GET_USER,
//        status: 'error',
//        error: error
//      });
//    });
//  }
//}
