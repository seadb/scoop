import axios from 'axios'

export const API_URL='http://69.16.197.116:3001/api'
export const CLIENT_ROOT_URL='http://69.16.197.116:8100/#'

const config = {
  axios: (token) => {
    return axios.create({
      baseURL: API_URL,
      headers: {'Authorization': token}
    });
  }
}
export default config
