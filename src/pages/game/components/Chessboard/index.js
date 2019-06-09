import React, { useState } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'

import { STATUS } from '../../../../helpers/gameData'

import Card from '../Card'

import styles from './index.less'

function Chessboard({ cards, status, leftMatched, dispatch }) {
  const [lastCard, setLastCard] = useState(null)

  function onFlipCard(e) {
    dispatch({
      type: 'game/flipCards',
      payload: [e]
    })

    if (status === STATUS.READY) {
      dispatch({
        type: 'game/startGame'
      })
    }
    if (!lastCard) {
      return setLastCard(e)
    }

    if (lastCard !== e && lastCard.cardName === e.cardName) {
      setLastCard(null)

      dispatch({
        type: 'game/markMatch'
      })

      if (leftMatched === 1) {
        dispatch({
          type: 'game/endGame'
        })
      }
      return
    }
    let cachedLastCard = lastCard
    setLastCard(null)

    setTimeout(() => {
      dispatch({
        type: 'game/flipCards',
        payload: [cachedLastCard, e]
      })
    }, 1000)
  }

  return (
    <div className={styles.chessboard}>
      {cards.map((card, i) => {
        if (i > 0 && i % 4 === 0) {
          return <Card key={card.id} style={{ marginRight: 0 }} option={card} onFlipCard={onFlipCard} />
        }
        return <Card key={card.id} option={card} onFlipCard={onFlipCard} />
      })}
    </div>
  )
}

Chessboard.propTypes = {
  status: PropTypes.string.isRequired,
  leftMatched: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      flipped: PropTypes.bool,
      cardName: PropTypes.string
    })
  ),
  dispatch: PropTypes.func
}

export default connect(({ game }) => {
  return {
    status: game.status,
    leftMatched: game.leftMatched,
    cards: game.cards
  }
})(Chessboard)
