import { useModel } from '@umijs/max'
import React from 'react'

import { pick } from '@/helpers'

import styles from './index.less'

function MatchInfo() {
  const { leftMatched } = useModel('useGameModel', (model) =>
    pick(model, 'leftMatched'),
  )

  return (
    <div className={styles.board}>
      <span>Pairs Left To Match</span>
      <h2>{leftMatched}</h2>
    </div>
  )
}

export default MatchInfo
