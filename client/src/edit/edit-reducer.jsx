import { UPDATE, EDIT_USER } from './edit-constants'
import reducer, {generateStates} from '../redux/reducer'

const initialState = {
  data: {},
  loading: false,
  error: false
}

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      const data = Object.assign({}, state.data, action.data)
      return Object.assign({}, state, {data})
    case UPDATE:
      const states = generateStates(action)
      return reducer(state, action, states.loading, states.success, states.error)
    default:
      return state
  }
}

export default editReducer
