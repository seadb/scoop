import { combineReducers } from 'redux'
import auth from './auth/auth-reducer.js'
import user from './user/user-reducer.js'
//import { friendReducer } from './friend/friend-reducer.js'

const reducer = combineReducers({
  auth,
  user
//  friendReducer
})
//
export default reducer;
