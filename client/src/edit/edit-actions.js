import cookie from 'react-cookie'
import { UPDATE, EDIT_USER } from './edit-constants'
import action from '../redux/action'
import config, { API_URL, CLIENT_ROOT_URL } from '../config'
const axios = config.axios(cookie.load('token'))

export function editUser(updates) {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      data: updates
    });
  }
}

export function update(updates, id) {
  return (dispatch) => {
    return action({
      dispatch,
      request: axios.post,
      url: `users/update/${id}`,
      body: updates,
      type: UPDATE
    })
  }
}
