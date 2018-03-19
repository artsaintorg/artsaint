import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from '../components/Button'
import { hideModal } from '../stores/modal'

const Overlay = styled.div`
  background: rgba(240, 241, 245, 0.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  background: #fff;
  width: 400px;
  padding: 20px;
  box-shadow: 0 10px 30px #ebecf0;
  border-radius: 2px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 19;
`

const Title = styled.h3`
  margin: 0 auto;
`

const Par = styled.p``
const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

class SignUp extends Component {
  static propTypes = {
    hideModal: PropTypes.func,
    showModal: PropTypes.bool
  }
  constructor(props) {
    super(props)
    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onCloseModal(e) {
    if (e.target.id === 'js-overlay') {
      // console.log(1)
      this.props.hideModal()
    }
  }

  renderModal() {
    return (
      <ModalWrapper>
        <Overlay id="js-overlay" onClick={this.onCloseModal}>
          <Content>
            <Title>Create a Steem account</Title>
            <Par>
              In order to use Artsaint you need a Steem account. You will be
              redirected to the sign-up process of steemit.com. Once your Steem
              account has been verified and enabled, you can use it to log in to
              Artsaint.
            </Par>
            <Footer>
              <Link to="https://signup.steemit.com" target="_blank">
                <Button color="blue">Proceed</Button>
              </Link>
              <Button onClick={this.props.hideModal}>Cancel</Button>
            </Footer>
          </Content>
        </Overlay>
      </ModalWrapper>
    )
  }

  render() {
    if (this.props.showModal) {
      return ReactDOM.createPortal(
        this.renderModal(),
        document.getElementById('modal')
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.show && state.modal.content === 'sign-up'
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideModal
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
