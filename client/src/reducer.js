import { combineReducers } from 'redux'
import authReducer from './auth/auth-reducer.js'
import userReducer from './user/user-reducer.js'
//import { friendReducer } from './friend/friend-reducer.js'

const reducer = combineReducers({
  authReducer,
  userReducer
//  friendReducer
})
//
export default reducer;
