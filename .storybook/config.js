import { configure, addDecorator } from '@storybook/react'
import '../src/index.css'

import StoryRouter from 'storybook-router'

const req = require.context('../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(StoryRouter())

configure(loadStories, module)
