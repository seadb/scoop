import { GET_USER } from './user-constants'
import reducer from '../redux/reducer'

const initialState = {
  loading: false,
  data: {},
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      const loading = { loading: true}
      const success = {
        loading: false,
        data: action.payload
      }
      const error = {
        loading: false,
        error: action.error
      }
      return reducer(state, action, loading, success, error)
    default:
      return state
  }
}

export default userReducer
