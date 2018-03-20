import Cookies from 'js-cookie'
import steemconnect from '../helpers/steemconnect'

export const GET_LOGIN_URL = 'auth/GET_LOGIN_URL'

export const GET_ME = 'auth/GET_ME'
export const GET_ME_SUCCESS = 'auth/GET_ME_SUCCESS'
export const GET_ME_ERROR = 'auth/GET_ME_ERROR'

export const LOGOUT = 'auth/LOGOUT'

const initialState = {
  isLogin: false,
  loginURL: '',
  me: {},
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_URL:
      return {
        ...state,
        loginURL: payload.loginURL
      }
    case GET_ME:
      return {
        ...state,
        loading: true
      }
    case GET_ME_SUCCESS:
      return {
        ...state,
        me: payload.me,
        loading: false,
        isLogin: true
      }
    case GET_ME_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false
      }
    case LOGOUT:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export const getLoginURL = () => dispatch => {
  dispatch({
    type: GET_LOGIN_URL,
    payload: {
      loginURL: steemconnect().getLoginURL()
    }
  })
}

export const getMe = () => dispatch => {
  dispatch({ type: GET_ME })
  steemconnect().me((err, res) => {
    if (err) {
      dispatch({ type: GET_ME_ERROR, payload: { error: err } })
    } else {
      dispatch({ type: GET_ME_SUCCESS, payload: { me: res } })
    }
  })
}

export const doLogout = () => dispatch => {
  Cookies.remove('accessToken')
  Cookies.remove('username')
  dispatch({ type: LOGOUT })
}
