import React from 'react'
import PropTypes from 'prop-types'
import VisibleDashboard from '../containers/dashboard/VisibleDashboard'

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
      </div>
    )
  }
}

MemoryGame.propTypes = {
  reset: PropTypes.func.isRequired
}

export default MemoryGame
