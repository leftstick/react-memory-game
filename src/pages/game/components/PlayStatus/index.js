import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { STATUS } from '../../../../helpers/gameData'

import styles from './index.less'

function PlayStatus({ elapsedMs, status, dispatch }) {
  return (
    <div className={styles.statusBar}>
      <InfoItem status={status} playAgain={() => dispatch({ type: 'game/reset' })} />
      <span className={styles.elapsed}>{elapsedMs} s</span>
    </div>
  )
}

PlayStatus.propTypes = {
  elapsedMs: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  dispatch: PropTypes.func
}

function InfoItem({ status, playAgain }) {
  function _playAgain(e) {
    e.preventDefault()
    e.stopPropagation()
    playAgain()
  }

  if (status === STATUS.READY) {
    return <span>Ready</span>
  }
  if (status === STATUS.PLAYING) {
    return <span>Playing</span>
  }
  if (status === STATUS.PASS) {
    return (
      <a href className={styles.playAgain} onClick={_playAgain}>
        Play again
      </a>
    )
  }
  return null
}

InfoItem.propTypes = {
  status: PropTypes.string.isRequired,
  playAgain: PropTypes.func
}

export default connect(({ game }) => {
  return {
    elapsedMs: game.elapsedMs,
    status: game.status
  }
})(PlayStatus)
