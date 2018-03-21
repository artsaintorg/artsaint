import axios from 'axios'

const API_URL = 'http://localhost:4000'

const api = (url, params, callback) => {
  return axios
    .get(API_URL + url)
    .then(res => {
      callback(null, res.data)
    })
    .catch(err => {
      callback(err, null)
    })
}

export default api
