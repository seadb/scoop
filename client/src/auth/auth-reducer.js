import { LOGIN, LOGOUT, REGISTER, VERIFY, ADD_FRIEND, DELETE_FRIEND } 
  from './auth-constants'
import reducer from '../redux/reducer'

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    bio: '',
    age: '',
    sex: '',
    created: ''
  },
  friends: [],
  error: undefined,
  loggingIn: false,
  registering: false,
  verifying: false,
  adding: false,
  deleting: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let loading = { loggingIn: true }
      let success = {
        user: action.data.user,
        friends: action.data.friends,
        loggingIn: false
      }
      let error = {
        loggingIn: false,
        error: action.error
      }
      return reducer(state, action, loading, success, error)
    case LOGOUT:
      return Object.assign({}, state, {user:initialState.user})
    case REGISTER:
      const regLoading = { registering: true }
      const regSuccess = {
        user: action.data.user,
        friends: action.data.friends,
        registering: false 
      }
      const regError = {
        registering: false,
        error: action.error
      }
      return reducer(state, action, regLoading, regSuccess, regError)
    case VERIFY:
      const verLoading = { verifying: true }
      let verSuccess
      if(action.status === "success") {
        verSuccess = {
          user: action.data.user,
          friends: action.data.friends,
          verifying: false
        }
      }
      const verError = {
        verifying: false,
        error: action.error
      }
      return reducer(state, action, verLoading, verSuccess, verError)
    case ADD_FRIEND:
      const friends = [...state.friends]
      if (action.status === "success") {
        friends.push(action.data)
      }
      const add = {
        loading: {
          adding: true
        },
        success: {
          adding: false,
          friends: friends
        },
        error: {
          adding: false,
          error: action.error
        }
      }
      return reducer(state, action, add.loading, add.success, add.error)
    case DELETE_FRIEND:
      const newFriends = [...state.friends]
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
          friends: newFriends
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

export default authReducer
