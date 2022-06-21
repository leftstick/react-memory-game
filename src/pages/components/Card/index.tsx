import { useModel } from '@umijs/max'
import classnames from 'classnames'
import React from 'react'

import { getImage, pick } from '@/helpers'
import { ICard } from '@/ITypes'

import styles from './index.less'

interface ICardProps {
  style?: React.CSSProperties
  value: ICard
}

function Card({ style, value }: ICardProps) {
  const { flipped, name } = value

  const { flipCard } = useModel('useGameModel', (model) =>
    pick(model, 'flipCard'),
  )

  return (
    <div
      className={styles.container}
      onClick={() => flipCard(value)}
      style={style}
    >
      <div className={classnames(styles.card, { [styles.flipped]: flipped })}>
        <img className={styles.front} src={getImage(name)} alt="card" />
        <img
          className={styles.back}
          src={getImage('URL_BACK')}
          alt="back-card"
        />
      </div>
    </div>
  )
}

export default Card
