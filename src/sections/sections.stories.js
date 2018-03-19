import React from 'react'
import { storiesOf } from '@storybook/react'

import Landing from './Landing'
import Gallery from './Gallery'

storiesOf('Sections', module)
  .add('Landing', () => <Landing />)
  .add('Gallery', () => <Gallery />)
