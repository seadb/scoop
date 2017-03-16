import { combineReducers } from 'redux'
import auth from './auth/auth-reducer'
import user from './user/user-reducer'
import friends from './friends/friend-reducer'

const reducer = combineReducers({
  auth,
  user
})
//
export default reducer;
