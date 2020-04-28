import React from 'react'
import { useModel } from 'umi'

import { pick } from '@/helpers'

import Card from '../Card'

import styles from './index.less'

function Chessboard() {
  const { cards } = useModel('useGameModel', model => pick(model, 'cards'))

  console.log('cards', cards)

  return (
    <div className={styles.chessboard}>
      {cards.map((card, i) => {
        if (i > 0 && i % 4 === 0) {
          return <Card key={card.id} style={{ marginRight: 0 }} value={card} />
        }
        return <Card key={card.id} value={card} />
      })}
    </div>
  )
}

export default Chessboard
