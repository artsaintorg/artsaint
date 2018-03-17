import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
  .add('White grey', () => <Button>White grey</Button>)
  .add('White big', () => <Button size="big">White grey</Button>)
  .add('Blue button', () => <Button color="blue">White grey</Button>)
  .add('Blue big', () => (
    <Button color="blue" size="big">
      White grey
    </Button>
  ))
