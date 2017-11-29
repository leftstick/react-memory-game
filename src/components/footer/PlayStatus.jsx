import React from 'react'
import PropTypes from 'prop-types'

import { STATUS } from '../../model/status'

import './PlayStatus.css'

class PlayStatus extends React.Component {
  constructor(props) {
    super(props)

    this._stop = this._playAgain.bind(this)
  }

  _playAgain(e) {
    e.preventDefault()
    e.stopPropagation()
    this.props.reset()
  }

  _getInfoItem() {
    if (this.props.status === STATUS.READY) {
      return <span>Ready</span>
    }
    if (this.props.status === STATUS.PLAYING) {
      return <span>Playing</span>
    }
    if (this.props.status === STATUS.PASS) {
      return (
        <a href="" onClick={this._playAgain}>
          Play again
        </a>
      )
    }
    return ''
  }

  render() {
    return (
      <div styleName="status-footer">
        {this._getInfoItem()}
        <span styleName="elapsed">{this.props.elapsedMs} s</span>
      </div>
    )
  }
}

PlayStatus.propTypes = {
  elapsedMs: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
}

export default PlayStatus
