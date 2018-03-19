import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 320px;
  height: 240px;
  background: #eee;
  position: relative;
  margin-bottom: 20px;

  :hover .content {
    opacity: 1;
  }
`

const Cover = styled.img`
  width: 320px;
  height: 240px;
  object-fit: cover;
  position: absolute;
  top: 0;
  outline: none;
  border: none;
`

const Content = styled.div`
  width: 320px;
  height: 240px;
  position: absolute;
  top: 0;
  background: #eee;
  opacity: 0;
`

class ImageCard extends Component {
  render() {
    return (
      <Wrapper>
        <Cover />
        <Content className="content">teest</Content>
      </Wrapper>
    )
  }
}

export default ImageCard
