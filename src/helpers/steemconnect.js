import sc2 from 'sc2-sdk'
import Cookies from 'js-cookie'
import queryString from 'query-string'

// const env = process.env.NODE_ENV

let data = {
  app: 'artsaint.app',
  callbackURL: 'http://localhost:3000/callback',
  scope: ['vote', 'comment']
}

// if (env === 'production') {
//   data.callbackURL = 'https://produktif.netlify.com',
// }
// https://github.com/steemit/steemconnect-sdk
const steemconnect = () => {
  const accessToken = Cookies.get('accessToken')
  if (accessToken) {
    data.accessToken = accessToken
  } else {
    const parsed = queryString.parse(window.location.search)
    if (parsed) {
      const { access_token, username } = parsed
      if (access_token) {
        Cookies.set('accessToken', access_token, { expires: 7 })
        Cookies.set('username', username, { expires: 7 })
        data.accessToken = accessToken
      }
    }
  }
  return sc2.Initialize(data)
}

export default steemconnect
