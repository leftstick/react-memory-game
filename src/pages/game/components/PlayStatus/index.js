import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { STATUS } from '../../../../helpers/gameData'

import styles from './index.less'

const READY = () => <span>Ready</span>
const PLAYING = () => <span>Playing</span>
const PASS = ({ onClick }) => (
  <b
    className={styles.playAgain}
    onClick={e => {
      e.preventDefault()
      e.stopPropagation()

      onClick && onClick()
    }}
  >
    Play again
  </b>
)

PASS.propTypes = {
  onClick: PropTypes.func
}

function PlayStatus(props) {
  const { elapsedMs, status, dispatch } = props

  const [statusMap] = useState(
    new Map([
      [STATUS.READY, READY()],
      [STATUS.PLAYING, PLAYING()],
      [STATUS.PASS, PASS({ onClick: () => dispatch({ type: 'game/reset' }) })]
    ])
  )

  const gameStatus = useMemo(() => statusMap.get(status), [status, statusMap])

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
