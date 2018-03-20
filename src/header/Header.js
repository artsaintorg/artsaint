import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { Link } from 'react-router-dom'

import Button from '../components/Button'

import logo from './artsaint-logo.png'
import { showSignUpModal } from '../stores/modal'
import { getLoginURL, getMe, doLogout } from '../stores/auth'

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
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.99) 10%,
    rgba(255, 255, 255, 0.96) 20%,
    rgba(255, 255, 255, 0.91) 30%,
    rgba(255, 255, 255, 0.84) 40%,
    rgba(255, 255, 255, 0.75) 50%,
    rgba(255, 255, 255, 0.64) 60%,
    rgba(255, 255, 255, 0.51) 70%,
    rgba(255, 255, 255, 0.36) 80%,
    rgba(255, 255, 255, 0.19) 90%,
    rgba(255, 255, 255, 0) 100%
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
  static propTypes = {
    getLoginURL: PropTypes.func,
    showSignUpModal: PropTypes.func,
    loginURL: PropTypes.string,
    getMe: PropTypes.func
  }

  componentDidMount() {
    this.props.getLoginURL()
    if (Cookies.get('accessToken')) {
      this.props.getMe()
    }
  }

  renderNotLogin = () => (
    <Right>
      <a href={this.props.loginURL}>
        <Button>Login</Button>
      </a>
      <Button color="blue" onClick={this.props.showSignUpModal}>
        Sign up
      </Button>
    </Right>
  )
  renderLogin = () => (
    <Right>
      <Button onClick={this.props.doLogout}>Logout</Button>
    </Right>
  )

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
        {this.props.isLogin ? this.renderLogin() : this.renderNotLogin()}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  loginURL: state.auth.loginURL,
  isLogin: state.auth.isLogin,
  me: state.auth.me
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showSignUpModal,
      getLoginURL,
      getMe,
      doLogout
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Header)
