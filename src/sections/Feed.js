import React, { Component } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getFeed, DEFAULT_TAG } from '../stores/feed'

import Card from '../components/Card'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
  margin: 20px auto;
`
class Feed extends Component {
  componentDidMount() {
    console.log(this.props.router)
    this.props.getFeed('trending')
  }

  render() {
    const loading = this.props.getLoading('trending')
    if (loading) {
      return <div>Loading...</div>
    }
    const list = this.props.getList('trending')
    return (
      <Wrapper>
        {list.map(item => {
          return <Card data={item} key={item.id} />
        })}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  router: state.router,
  getLoading(sortBy, tag = DEFAULT_TAG) {
    let loading = null
    if (state.feed[sortBy] && state.feed[sortBy][tag]) {
      loading = state.feed[sortBy][tag].loading
    }
    return loading
  },
  getList(sortBy, tag = DEFAULT_TAG) {
    let list = []
    if (state.feed[sortBy] && state.feed[sortBy][tag]) {
      list = state.feed[sortBy][tag].list
    }
    return list.map(item => state.feed.posts[item])
  }
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFeed
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
