import React from 'react'
import PropTypes from 'prop-types'

import './Score.css'

class Score extends React.Component {
  render() {
    return (
      <div styleName="score">
        <span>Highest Speed</span>
        <h2>{this.props.highestSpeed}</h2>
      </div>
    )
  }
}

Score.propTypes = {
  highestSpeed: PropTypes.number.isRequired
}

export default Score
