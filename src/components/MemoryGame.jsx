import React from 'react'
import PropTypes from 'prop-types'
import VisibleDashboard from '../containers/dashboard/VisibleDashboard'
import VisibleChessboard from '../containers/chessboard/VisibleChessboard'
import VisiblePlayStatus from '../containers/footer/VisiblePlayStatus'

import './MemoryGame.css'

class MemoryGame extends React.Component {
  constructor(props) {
    super(props)

    this.props.reset()
  }

  render() {
    return (
      <div styleName="memory-game">
        <VisibleDashboard />
        <VisibleChessboard />
        <VisiblePlayStatus />
      </div>
    )
  }
}

MemoryGame.propTypes = {
  reset: PropTypes.func.isRequired
}

export default MemoryGame
