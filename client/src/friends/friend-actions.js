import { ADD_FRIEND } from './friend-constants'
import axios from 'axios'
import { API_URL, CLIENT_ROOT_URL } from '../config'
import action from '../redux/action'

export function addFriend(id, user) {
  return (dispatch) => {
    action(dispatch, axios.post, user, ADD_FRIEND, `${API_URL}/friends/add/${id}`,
           'response.data', CLIENT_ROOT_URL);
  }
}

export function deleteFriend(id, user) {
  return (dispatch) => {
    action(dispatch, axios.post, user, DELETE_FRIEND, `${API_URL}/friends/delete/${id}`,
           'response.data', CLIENT_ROOT_URL);
  }
}
