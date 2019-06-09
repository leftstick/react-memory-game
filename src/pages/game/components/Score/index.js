import React from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'

import styles from './index.less'

function Score({ highestSpeed }) {
  return (
    <div className={styles.score}>
      <span>Highest Speed</span>
      <h2>{highestSpeed}</h2>
    </div>
  )
}

Score.propTypes = {
  highestSpeed: PropTypes.number.isRequired
}

export default connect(({ game }) => {
  return {
    highestSpeed: game.highestSpeed
  }
})(Score)
