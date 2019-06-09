import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getImage } from '../../../../helpers/gameData'

import styles from './index.less'

function Card({ style, option, onFlipCard }) {
  const { flipped, cardName } = option

  function handleFlip() {
    if (flipped) {
      return
    }
    return onFlipCard(option)
  }

  return (
    <div className={styles.container} onClick={handleFlip} style={style}>
      <div className={classnames(styles.card, { [styles.flipped]: flipped })}>
        <img className={styles.front} src={getImage(cardName)} alt="card" />
        <img className={styles.back} src={getImage('back')} alt="back-card" />
      </div>
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  option: PropTypes.shape({
    flipped: PropTypes.bool,
    cardName: PropTypes.string
  }).isRequired,
  onFlipCard: PropTypes.func.isRequired
}

export default Card
