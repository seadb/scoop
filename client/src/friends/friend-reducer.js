import { combineReducers } from 'redux'
import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS_AUTH, GET_FRIENDS_USER } from './friend-constants'
import reducer from '../redux/reducer'
import { generateStates } from '../redux/reducer'

const initialState = {
  loading: false,
  data:  null,
  error: null
}

const add = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    default:
      return state
  }
}

const deleted = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FRIEND:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    default:
      return state
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_AUTH:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
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

export default combineReducers({add, deleted, auth, user})
