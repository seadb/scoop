const generateStates = (action) => ({
  loading: { loading: true },
  success: {
    loading: false,
    data: action.data
  },
  error: {
    loading: false,
    error: action.error
  }
})

const reducer = (state, action, loadingState, successState, errorState) => {
  switch (action.status) {
    case undefined:
      return Object.assign({}, state, loadingState)
    case "success":
      return Object.assign({}, state, successState)
    case "error":
      return Object.assign({}, state, errorState)
  }
}
export { generateStates }
export default reducer
