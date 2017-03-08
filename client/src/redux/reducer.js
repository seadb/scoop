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

export default reducer
