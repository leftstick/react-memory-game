import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './MatchInfo.css'

class MatchInfo extends Component {
  render() {
    return (
      <div styleName="board">
        <span>Pairs Left To Match</span>
        <h2>{this.props.leftMatched}</h2>
      </div>
    )
  }
}

MatchInfo.propTypes = {
  leftMatched: PropTypes.number.isRequired
}

export default MatchInfo
