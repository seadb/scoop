import { LOGIN, LOGOUT, REGISTER } from './auth-constants'

const initialState = {
  loggingIn: false,
  registering: false,
  error: null,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      //switch (action.type) {
      //}
      if (!action.status) {
        return Object.assign({}, state, {
          loggingIn: true
        })
      }
      else if (action.status === "success") {
        return Object.assign({}, state, {
          loggingIn: false,
          user: action.payload
        })
      }
      else if (action.status === "error") {
        return Object.assign({}, state, {
          loggingIn: false,
          error: action.payload
        })
      }
      break;
    case REGISTER:
      if (!action.status) {
        return Object.assign({}, state, {
          registering: true
        })
      }
      else if (action.status === "success") {
        return Object.assign({}, state, {
          registering: false,
          user: action.payload
        })
      }
      else if (action.status === "error") {
        return Object.assign({}, state, {
          registering: false,
          error: action.payload
        })
      }
      break;
  }
  return state
}

export default authReducer
