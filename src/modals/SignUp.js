import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import PropTypes from 'prop-types'

import { hideModal } from '../stores/modal'

const Overlay = styled.div`
  background: #222;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  background: #fff;
  width: 400px;
  height: 400px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 19;
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
      console.log(1)
      this.props.hideModal()
    }
  }

  renderModal() {
    return (
      <ModalWrapper>
        <Overlay id="js-overlay" onClick={this.onCloseModal}>
          <Content>content</Content>
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
