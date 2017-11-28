import React from 'react'
import PropTypes from 'prop-types'

import { STATUS } from '../../model/status'

import Card from './Card'

import './Chessboard.css'

class ChessBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lastCard: null }

    this.onFlipCard = this.onFlipCard.bind(this)
  }

  onFlipCard(e) {
    this.props.flipCard(e)

    if (this.props.status === STATUS.READY) {
      this.props.updateStatus(STATUS.PLAYING)
    }
    if (!this.state.lastCard) {
      return this.setState({
        lastCard: e
      })
    }
    if (this.state.lastCard !== e && this.state.lastCard.cardName === e.cardName) {
      this.setState({
        lastCard: null
      })
      this.props.markMatch()
      if (this.props.leftMatched === 1) {
        this.props.updateStatus(STATUS.PASS)
      }
      return
    }
    let lastCard = this.state.lastCard
    this.setState({
      lastCard: null
    })
    setTimeout(() => {
      this.props.flipCards([lastCard, e])
    }, 1000)
  }

  render() {
    const cards = this.props.cards
    return (
      <div styleName="chessboard">
        {cards.map((card, i) => <Card key={i.toString()} option={card} onFlipCard={this.onFlipCard} />)}
      </div>
    )
  }
}

ChessBoard.propTypes = {
  status: PropTypes.string.isRequired,
  leftMatched: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      flipped: PropTypes.bool,
      cardName: PropTypes.string
    })
  ),
  markMatch: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  flipCard: PropTypes.func.isRequired,
  flipCards: PropTypes.func.isRequired
}

export default ChessBoard
