import React from 'react'
import styled from 'styled-components'

import ImageCard from '../components/ImageCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
  margin: 20px auto;
`

const Gallery = () => (
  <Wrapper>
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
    <ImageCard />
  </Wrapper>
)

export default Gallery
