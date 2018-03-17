import * as React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Container from '../components/Container'
import Button from '../components/Button'

import { showSignUpModal } from '../stores/modal'
import SignUp from '../modals/SignUp'

const illust = require('./hero.png')
const bg = require('./illust.svg')

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow-y: hidden;
`

const Content = styled.div`
  width: 400px;
  z-index: 1;
`
const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
`
const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  line-height: 1.2;
`

const Illust = styled.img`
  width: 600px;
  height: auto;
  /* object-fit: contain; */
  z-index: 2;
  position: relative;
`
const Bg = styled.img`
  width: 480px;
  height: 480px;
  position: absolute;
  left: 240px;
  top: 100px;
  object-fit: contain;
  z-index: -1;
`

// const Triangle = styled.div`
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 0 0 120px 100vw;
//   border-color: transparent transparent #007bff transparent;
//   margin-top: -120px;
//   z-index: 0;
//   `

// const HowTo = styled.div`
//   background: #007bff;
//   height: 300px;
//   z-index: 0;
// `

class Landing extends React.Component {
  // state = {
  //   showSignUpModal: PropTypes.func,
  // }

  static propTypes = {
    showSignUpModal: PropTypes.func
  }

  componentDidMount() {
    const $illust = document.querySelector('.js-illust')
    const $bg = document.querySelector('.js-bg')
    window.addEventListener('scroll', () => {
      const { scrollY } = window
      if ($illust) {
        $illust.style.top = `${scrollY * 0.2}px`
        $bg.style.top = `${scrollY * 0.12 + 100}px`
      }
    })
  }

  onShowSignUpModal = () => {
    this.props.showSignUpModal()
  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Wrapper>
          <Bg src={bg} className="js-bg" />
          <Content>
            <Title>Showcase your Art and get Rewards.</Title>
            <Description>
              Artsaint rewards artists, illustrators, designers by utilizing a
              vote-based reward system built on top of the STEEM Blockchain.
            </Description>
            <Button size="big" color="blue" onClick={this.onShowSignUpModal}>
              Sign up with STEEM
            </Button>
          </Content>
          <div>
            <Illust
              className="js-illust"
              src={illust}
              alt="Artsaint, rewarding art"
            />
          </div>
        </Wrapper>
        <SignUp />
        {/* <Triangle />
        <HowTo>
          <Wrapper>
            <div>yes</div>
          </Wrapper>
        </HowTo> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showModal: state.modal.show && state.modal.content === 'sign-up'
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showSignUpModal
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
