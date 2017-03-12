import { ADD_FRIEND } from './friend-constants'
import axios from 'axios'
import { API_URL, CLIENT_ROOT_URL } from '../config'
import action from '../redux/action'

export function addFriend(user, id) {
  return (dispatch) => {
    action({
      dispatch,
      request: axios.post,
      body: user,
      type: ADD_FRIEND,
      url: `${API_URL}/friends/add/${id}`,
      redirect: CLIENT_ROOT_URL
    });
  }
}

export function deleteFriend(id, user) {
  return (dispatch) => {
    action({
      dispatch,
      request: axios.post,
      body: user,
      type: DELETE_FRIEND,
      url: `${API_URL}/friends/delete/${id}`,
      redirect: CLIENT_ROOT_URL
    });
  }
}
