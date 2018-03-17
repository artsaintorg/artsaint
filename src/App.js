import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Header from './header/Header'

import styled from 'styled-components'

const Main = styled.div`
  padding-top: 60px;
`

const App = () => (
  <div>
    <Header />

    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </Main>
  </div>
)

export default App
