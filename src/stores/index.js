import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'

import modal from './modal'

export default combineReducers({
  router: routerReducer,
  counter,
  modal
})
