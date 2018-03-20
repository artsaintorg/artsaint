import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 320px;
  height: 240px;
  background: #eee;
  position: relative;
  margin-bottom: 20px;
  border-radius: 2px;
  overflow: hidden;

  :hover .content {
    opacity: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
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
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.6) 100%
  );
  opacity: 0;
  color: #fff;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
`

const Title = styled.h4`
  color: #fff;
  margin: 0;
`

const User = styled.div``

class ImageCard extends Component {
  render() {
    return (
      <Wrapper>
        <Cover src="https://picsum.photos/240/320/?random" />
        <Content className="content">
          <User />
          <Title>This is Title</Title>
        </Content>
      </Wrapper>
    )
  }
}

export default ImageCard
