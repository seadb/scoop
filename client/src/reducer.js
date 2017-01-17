const combineReducers = require('redux')
const authReducer = require('./auth/auth-reducer.js')
//import { userReducer } from './user/user-reducer.js'
//import { friendReducer } from './friend/friend-reducer.js'

const reducer = authReducer;
//const rootReducer = combineReducers({
//  authReducer,
//  userReducer,
//  friendReducer
//})
//
export default reducer;
