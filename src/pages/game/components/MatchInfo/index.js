import React from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'

import styles from './index.less'

function MatchInfo({ leftMatched }) {
  return (
    <div className={styles.board}>
      <span>Pairs Left To Match</span>
      <h2>{leftMatched}</h2>
    </div>
  )
}

MatchInfo.propTypes = {
  leftMatched: PropTypes.number.isRequired
}

export default connect(({ game }) => {
  return {
    leftMatched: game.leftMatched
  }
})(MatchInfo)
