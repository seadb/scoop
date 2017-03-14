import { combineReducers } from 'redux'
import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS_AUTH, GET_FRIENDS_USER } from './friend-constants'
import reducer from '../redux/reducer'
import { generateStates } from '../redux/reducer'

const initialState = {
  loading: false,
  data:  [],
  error: null
}

const initialAuthState = {
  adding: false,
  deleting: false,
  loading: false,
  data:  [],
  error: null

}

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_FRIENDS_AUTH:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    case ADD_FRIEND:
      const friends = [...state.data]
      if (action.status === "success") {
        friends.push(action.data)
      }
      const add = {
        loading: {
          adding: true
        },
        success: {
          adding: false,
          data: friends
        },
        error: {
          adding: false,
          error: action.error
        }
      }
      return reducer(state, action, add.loading, add.success, add.error)
    case DELETE_FRIEND:
      const newFriends = [...state.data]
      if (action.status === "success") {
         for(var i = 0; i < newFriends.length; i++) {
           if(newFriends[i].id === action.data.toUserId) {
             newFriends.splice(i, 1);
             break;
           }
         }
      }
      const deleted = {
        loading: {
          deleting: true
        },
        success: {
          deleting: false,
          data: newFriends
        },
        error: {
          deleting: false,
          error: action.error
        }
      }
      return reducer(state, action, deleted.loading, deleted.success, deleted.error)
    default:
      return state
  }
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_USER:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    default:
      return state
  }
}

export default combineReducers({auth, user})
