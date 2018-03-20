import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Callback extends Component {
  static propTypes = {
    router: PropTypes.object,
    loading: PropTypes.bool,
    me: PropTypes.object
  }

  render() {
    return (
      <div>
        Callback {this.props.loading && 'loading...'}
        <p>{this.props.me.name}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  me: state.auth.me
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
