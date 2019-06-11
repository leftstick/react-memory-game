import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { STATUS } from '../../../../helpers/gameData'

import styles from './index.less'

function computeGameStatus(dispatch, status) {
  const _playAgain = e => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'game/reset' })
  }

  const READY = <span>Ready</span>
  const PLAYING = <span>Playing</span>
  const PASS = (
    <b className={styles.playAgain} onClick={_playAgain}>
      Play again
    </b>
  )

  const statusMap = new Map([[STATUS.READY, READY], [STATUS.PLAYING, PLAYING], [STATUS.PASS, PASS]])

  return statusMap.get(status)
}

function PlayStatus(props) {
  const { elapsedMs, status, dispatch } = props

  const gameStatus = useMemo(() => computeGameStatus(dispatch, status), [dispatch, status])

  return (
    <div className={styles.statusBar}>
      {gameStatus}
      <span className={styles.elapsed}>{elapsedMs} s</span>
    </div>
  )
}

PlayStatus.propTypes = {
  elapsedMs: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  dispatch: PropTypes.func
}

export default connect(({ game }) => {
  return {
    elapsedMs: game.elapsedMs,
    status: game.status
  }
})(PlayStatus)
