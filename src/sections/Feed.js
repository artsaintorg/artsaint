import React, { Component } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
  static propTypes = {
    router: PropTypes.object,
    getFeed: PropTypes.func,
    selectList: PropTypes.func,
    selectLoading: PropTypes.func
  }
  state = {
    isFetching: false,
    lastFeed: ''
  }

  componentDidMount() {
    // console.log(this.props.router)
    const data = this.props.selectList('trending')
    if (!data.length) {
      this.props.getFeed('trending')
    } else {
      const nextLastFeed = data[data.length - 1]
      if (nextLastFeed) {
        const { author, permlink } = nextLastFeed
        if (this.state.lastFeed !== `${author}/${permlink}`) {
          this.setState({ lastFeed: `${author}/${permlink}` })
        }
      }
    }
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    // you're at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const loading = this.props.selectLoading('trending')
      if (!loading) {
        this.props.getFeed('trending', undefined, this.state.lastFeed)
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  componentWillReceiveProps(nextProps) {
    const nextData = nextProps.selectList('trending')
    const nextLastFeed = nextData[nextData.length - 1]
    if (nextLastFeed) {
      const { author, permlink } = nextLastFeed
      if (this.state.lastFeed !== `${author}/${permlink}`) {
        this.setState({ lastFeed: `${author}/${permlink}` })
      }
    }
  }

  render() {
    const loading = this.props.selectLoading('trending')
    const list = this.props.selectList('trending')
    return (
      <Wrapper>
        {list.map((item) => {
          return <Card data={item} key={item.id} />
        })}

        {loading && <div>loading</div>}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  router: state.router,
  selectLoading(sortBy, tag = DEFAULT_TAG) {
    let loading = null
    if (state.feed[sortBy] && state.feed[sortBy][tag]) {
      loading = state.feed[sortBy][tag].loading
    }
    return loading
  },
  selectList(sortBy, tag = DEFAULT_TAG) {
    let list = []
    if (state.feed[sortBy] && state.feed[sortBy][tag]) {
      list = state.feed[sortBy][tag].list
    }

    if (list) {
      return list.map((item) => state.feed.posts[item])
    } else {
      return []
    }
  }
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getFeed
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Feed)