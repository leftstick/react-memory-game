import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { STATUS } from '../../../../helpers/gameData'

import styles from './index.less'

const READY = <span>Ready</span>
const PLAYING = <span>Playing</span>
let PASS = (
  <b id="pass" className={styles.playAgain}>
    Play again
  </b>
)
const statusMap = new Map([[STATUS.READY, READY], [STATUS.PLAYING, PLAYING], [STATUS.PASS, PASS]])

function PlayStatus(props) {
  const { elapsedMs, status, dispatch } = props

  useEffect(() => {
    if (status === STATUS.PASS) {
      const dom = document.getElementById('pass')
      dom.onclick = e => {
        e.preventDefault()
        e.stopPropagation()
        dispatch({ type: 'game/reset' })
      }
    }
  }, [dispatch, status])

  const gameStatus = useMemo(() => statusMap.get(status), [status])

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
