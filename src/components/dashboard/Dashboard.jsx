import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import MatchInfo from './MatchInfo'
import Score from './Score'

import './Dashboard.css'

class Dashboard extends React.Component {
  render() {
    return (
      <div styleName="status-bar">
        <Logo />
        <MatchInfo leftMatched={this.props.leftMatched} />
        <Score highestSpeed={this.props.highestSpeed} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  leftMatched: PropTypes.number.isRequired,
  highestSpeed: PropTypes.number.isRequired
}

export default Dashboard
