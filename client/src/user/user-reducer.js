import { GET_USER } from './user-constants'

const initialState = {
  loading: false,
  error: null,
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      if (!action.status) {
        return Object.assign({}, state, {
          loading: true
        })
      }
      else if (action.status === "success") {
        return Object.assign({}, state, {
          loading: false,
          user: action.user
        })
      }
      else if (action.status === "error") {
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      }
      break;
  }
  return state
}

export default userReducer
