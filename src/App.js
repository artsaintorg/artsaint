import React from 'react'
import { Route } from 'react-router-dom'

import styled from 'styled-components'

import Home from './pages/Home'
import About from './pages/About'
import List from './pages/List'
import Callback from './pages/Callback'

import Header from './header/Header'
import SignUpModal from './modals/SignUp'

const Main = styled.div`
  padding-top: 60px;
`

const App = () => (
  <div>
    <Header />

    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/trending" component={List} />
      <Route exact path="/callback" component={Callback} />
    </Main>

    <SignUpModal />
  </div>
)

export default App
