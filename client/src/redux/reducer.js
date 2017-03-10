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
      console.log(undefined)
      return Object.assign({}, state, loadingState)
    case "success":
      console.log("success")
      return Object.assign({}, state, successState)
    case "error":
      console.log("error")
      return Object.assign({}, state, errorState)
  }
}
export { generateStates }
export default reducer
