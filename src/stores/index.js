import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import modal from './modal'
import auth from './auth'

export default combineReducers({
  router: routerReducer,
  auth,
  modal
})
