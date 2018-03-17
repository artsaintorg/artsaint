import * as React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Button from '../components/Button'

import logo from './artsaint-logo.png'

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  width: 100vw;
  z-index: 9;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
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
          <Link to="/hot">
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
