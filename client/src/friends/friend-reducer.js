import { ADD_FRIEND } from './friend-constants'
import reducer from '../redux/reducer'
import { generateStates } from '../redux/reducer'

const initialState = {
  loading: false,
  data: {},
  error: null
}

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    default:
      return state
  }
}

export default friendReducer
