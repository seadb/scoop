import { GET_USER, SET_USER } from './user-constants'
import reducer from '../redux/reducer'

const initialState = {
  loading: false,
  data: {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    bio: '',
    age: '',
    sex: '',
    created: ''
  },
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const loading = { loading: true}
      const success = {
        loading: false,
        data: action.data
      }
      const error = {
        loading: false,
        error: action.error
      }
      return reducer(state, action, loading, success, error)
    case SET_USER: 
      return Object.assign({}, state, {data:action.data} )
    default:
      return state
  }
}

export default userReducer
