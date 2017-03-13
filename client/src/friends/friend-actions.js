import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS_AUTH, GET_FRIENDS_USER } from './friend-constants'
import cookie from 'react-cookie'
import { API_URL, CLIENT_ROOT_URL } from '../config'
import action from '../redux/action'
import config from '../config'
const axios = config.axios(cookie.load('token'))

export function addFriend(user, id) {
  return (dispatch) => {
    action({
      dispatch,
      request: axios.post,
      body: user,
      type: ADD_FRIEND,
      url: `/friends/add/${id}`
    });
  }
}

export function deleteFriend(user, id) {
  return (dispatch) => {
    action({
      dispatch,
      request: axios.post,
      body: user,
      type: DELETE_FRIEND,
      url: `${API_URL}/friends/delete/${addId}`
    });
  }
}

export function getFriends(user, type) {
  if(type === "auth") {
    return (dispatch) => {
      action({
        dispatch,
        request: axios.get,
        body: user,
        type: GET_FRIENDS_AUTH,
        url: `/friends`
      });
    }
  }
  else if(type=="user") {
    return (dispatch) => {
      action({
        dispatch,
        request: axios.get,
        body: user,
        type: GET_FRIENDS_USER,
        url: `/friends`
      });
    }
  }
}

