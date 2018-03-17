import React from 'react'

import { configure, addDecorator } from '@storybook/react'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from '../src/store'

import 'sanitize.css/sanitize.css'
import '../src/index.css'

import StoryRouter from 'storybook-router'

const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(StoryRouter())
addDecorator(story => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{story()}</ConnectedRouter>
  </Provider>
))

configure(loadStories, module)
