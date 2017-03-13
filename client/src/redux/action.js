/* Module which abstracts the process of sending requests and 
 * dispatching actions based on the response
 */

const requestPromise = (request, body, url) => {
  if(body) {
    return request(url, body)
  }
  else {
    return request(url)
  }
}

const action = ({dispatch, request, body, type, url, redirect}) => {
  dispatch({type: type});
  return requestPromise(request, body, url)
  .then(response => {
    dispatch({
      type: type,
      status: 'success',
      data: response.data
    });
    if(redirect) {
      window.location.href = redirect;
    }
    return response.data;
  })
  .catch((error) => {
    dispatch({
      type: type,
      status: 'error',
      error: error
    });
  });
}


const actioncb = ({dispatch, request, body, type, url, cb}) => {
  dispatch({type: type});
  requestPromise(request, body, url)
  .then(response => {
    dispatch({
      type: type,
      status: 'success',
      data: response.data
    });
    cb(response)
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
export { actioncb }
