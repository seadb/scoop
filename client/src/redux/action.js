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

const action = ({dispatch, request, body, type, url}) => {
  dispatch({type: type});
  return requestPromise(request, body, url)
  .then(response => {
    dispatch({
      type: type,
      status: 'success',
      data: response.data
    });
    return Promise.resolve(response);
  })
  .catch(error => {
    dispatch({
      type: type,
      status: 'error',
      error: error.response? error.response.data.message : error.message
    });
  });
}

export default action
