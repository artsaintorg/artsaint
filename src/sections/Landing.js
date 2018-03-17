import * as React from 'react'
import styled from 'styled-components'

import Container from '../components/Container'
import Button from '../components/Button'

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
  height: 600px;
  object-fit: contain;
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

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 120px 100vw;
  border-color: transparent transparent #007bff transparent;
  margin-top: -220px;
  z-index: 0;
`

const HowTo = styled.div`
  background: #007bff;
  height: 300px;
`

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    const $illust = document.querySelector('.js-illust')
    const $bg = document.querySelector('.js-bg')
    window.addEventListener('scroll', () => {
      const { scrollY } = window
      if ($illust) {
        $illust.style.top = `${scrollY * 0.15}px`
        $bg.style.top = `${scrollY * -0.1 + 100}px`
      }
    })
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
            <Button size="big" color="blue">
              Sign up with STEEM
            </Button>
          </Content>
          <Illust
            className="js-illust"
            src={illust}
            alt="Artsaint, rewarding art"
          />
        </Wrapper>
        <Triangle />
        <HowTo>
          <Wrapper>
            <div>yes</div>
          </Wrapper>
        </HowTo>
      </div>
    )
  }
}

export default Landing
