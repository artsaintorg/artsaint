import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-router'

import { ThemeProvider, injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router-dom'

import configureStore from '../src/store/configureStore'

const store = configureStore(window.__data__)

import theme from '../src/client/components/theme'
const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

injectGlobal`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.min.css');

  * {
    word-break: break-word;
  }
`

addDecorator(StoryRouter())

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </Provider>
))

configure(loadStories, module)
