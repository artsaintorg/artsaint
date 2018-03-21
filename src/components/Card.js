import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
`

const Footer = styled.div``

const User = styled.div``

class Card extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  render() {
    const { title, cover, author, permlink } = this.props.data
    return (
      <Link to={`/@${author}/${permlink}`}>
        <Wrapper>
          {cover && (
            <Cover src={`https://steemitimages.com/320x240/${cover}`} />
          )}
          <Content className="content">
            <Footer>
              <User />
              12 likes
            </Footer>
            <Title>{title}</Title>
          </Content>
        </Wrapper>
      </Link>
    )
  }
}

export default Card
