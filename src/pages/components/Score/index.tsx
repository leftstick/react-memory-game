import React from 'react'
import { useModel } from 'umi'

import { pick } from '@/helpers'

import styles from './index.less'

function Score() {
  const { highestSpeed } = useModel('useGameModel', model => pick(model, 'highestSpeed'))

  return (
    <div className={styles.score}>
      <span>Highest Speed</span>
      <h2>{highestSpeed}</h2>
    </div>
  )
}

export default Score
