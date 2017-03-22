import { combineReducers } from 'redux'
import auth from './auth/auth-reducer'
import edit from './edit/edit-reducer'
import user from './user/user-reducer'
import friends from './friends/friend-reducer'

const reducer = combineReducers({
  auth,
  edit,
  user
})
//
export default reducer;
