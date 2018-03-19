import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import List from './pages/List'

import Header from './header/Header'

import SignUp from './modals/SignUp'

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
      <Route exact path="/trending" component={List} />
    </Main>

    <SignUp />
  </div>
)

export default App
