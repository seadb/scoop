import { GET_USER } from './user-constants'
import axios from 'axios'
import { API_URL } from '../config'
import action from '../redux/action'

export function getUser(id) {
  return (dispatch) => {
    action({
      dispatch,
      request: axios.get,
      type: GET_USER,
      url: `${API_URL}/users/${id}`
    });
  }
}

