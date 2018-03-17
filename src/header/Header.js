import * as React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Button from '../components/Button'

import logo from './artsaint-logo.png'

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  /* background: #fff; */
  /* border-bottom: solid 1px #EBECF0; */
  align-items: center;
  padding: 0 20px;
`

const Logo = styled.img`
  height: 40px;
  width: auto;
`

const NavWrapper = styled.nav`
  padding: 0 20px;
  flex: 1;
`

const Right = styled.div``

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <Logo src={logo} alt="ArtSaint Logo" />
        </Link>
        <NavWrapper>
          <Link to="/trending">
            <Button>Trending</Button>
          </Link>
          <Link to="/new">
            <Button>New</Button>
          </Link>
          <Link to="/new">
            <Button>Hot</Button>
          </Link>
          <Link to="/promoted">
            <Button>Promoted</Button>
          </Link>
        </NavWrapper>
        <Right>
          <Button>Login</Button>
          <Button color="blue">Sign up</Button>
        </Right>
      </Wrapper>
    )
  }
}
export default Header
