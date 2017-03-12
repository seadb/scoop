import axios from 'axios'

export const API_URL='http://localhost:3000/api'
export const CLIENT_ROOT_URL='http://localhost:8100/#'

const config = {
  axios: (token) => {
    return axios.create({
      baseURL: API_URL,
      headers: {'Authorization': token}
    });
  }
}
export default config
