import { connect } from 'react-redux'

import { markMatch, updateStatus, flipCard, flipCards } from '../../store/action'

import Chessboard from '../../components/chessboard/Chessboard'

export default connect(
  state => {
    return {
      status: state.status,
      leftMatched: state.leftMatched,
      cards: state.cards
    }
  },
  dispatch => {
    return {
      markMatch: () => {
        dispatch(markMatch())
      },
      updateStatus: status => {
        dispatch(updateStatus(status))
      },
      flipCard: card => {
        dispatch(flipCard(card))
      },
      flipCards: cards => {
        dispatch(flipCards(cards))
      }
    }
  }
)(Chessboard)
