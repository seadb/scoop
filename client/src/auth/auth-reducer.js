import { LOGIN, LOGOUT, REGISTER } from './auth-constants'

const initialState = {
  loggingIn: false,
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
      else if (action.state === "success") {
        return Object.assign({}, state, {
          loggingIn: false,
          user: action.payload
        })
      }
      else if (action.state === "error") {
        return Object.assign({}, state, {
          loggingIn: false,
          error: action.payload
        })
      }
      break;
  }
  return state
}

export default authReducer
