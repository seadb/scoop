import { LOGIN, LOGOUT, REGISTER, VERIFY } from './auth-constants'
import reducer from '../redux/reducer'

const initialState = {
  user: null,
  login: { 
    loading: false,
    error: null
  },
  register: {
    loading: false,
    error: null
  },
  verify: {
    loading: false,
    error: null
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let loading = { login: { loading: true }}
      let success = {
        user: action.data,
        login: { loading: false }
      }
      let error = {
        login: {
          loading: false,
          error: action.error
        }
      }
      return reducer(state, action, loading, success, error)
      break
//      else if (action.status === "success") {
//        return Object.assign({}, state, {
//          loggingIn: false,
//          user: action.payload
//        })
//      }
//      else if (action.status === "error") {
//        return Object.assign({}, state, {
//          loggingIn: false,
//          error: action.payload
//        })
//      }
    case REGISTER:
      const regLoading = { register: { loading: true }}
      const regSuccess = {
        user: action.data,
        register: { loading: false }

      }
      const regError = {
        register: {
          loading: false,
          error: action.error
        }
      }
      return reducer(state, action, regLoading, regSuccess, regError)
      break
    case VERIFY:
      const verLoading = { verify: { loading: true }}
      const verSuccess = {
        user: action.data,
        verify: { loading: false }
      }
      const verError = {
        verify: {
          loading: false,
          error: action.error
        }
      }
      return reducer(state, action, verLoading, verSuccess, verError)
      break
//      if (!action.status) {
//        return Object.assign({}, state, {
//          registering: true
//        })
//      }
//      else if (action.status === "success") {
//        return Object.assign({}, state, {
//          registering: false,
//          user: action.payload
//        })
//      }
//      else if (action.status === "error") {
//        return Object.assign({}, state, {
//          registering: false,
//          error: action.payload
//        })
//      }
      default:
        return state
  }
}

export default authReducer
