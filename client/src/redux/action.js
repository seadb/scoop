/* Module which abstracts the process of sending requests and 
 * dispatching actions based on the response
 */

const action = (dispatch, request, type, url, payload) => {
  dispatch({type: type});
  request(url)
  .then(response => {
    dispatch({
      type: type,
      status: 'success',
      payload: eval(payload)
    });
    console.log(response)
    //window.location.href = CLIENT_ROOT_URL + '/dashboard';
  })
  .catch((error) => {
    dispatch({
      type: type,
      status: 'error',
      error: error
    });
  });
}

export default action
