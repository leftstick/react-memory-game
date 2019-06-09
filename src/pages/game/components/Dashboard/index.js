import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import Logo from '../Logo'
import MatchInfo from '../MatchInfo'
import Score from '../Score'

import styles from './index.less'

function Dashboard({ leftMatched, highestSpeed }) {
  return (
    <div className={styles.statusBar}>
      <Logo />
      <MatchInfo leftMatched={leftMatched} />
      <Score highestSpeed={highestSpeed} />
    </div>
  )
}

Dashboard.propTypes = {
  leftMatched: PropTypes.number.isRequired,
  highestSpeed: PropTypes.number.isRequired
}

export default connect(({ game }) => {
  return {
    leftMatched: game.leftMatched,
    highestSpeed: game.highestSpeed
  }
})(Dashboard)
