import { TYPES } from './actionType'
import { STATUS } from '../model/status'
import { CARD_NAMES } from '../model/card'

import { shuffle } from '../helper/array'

let timerId

const statusHandler = {
  PLAYING: dispatch => {
    timerId = setInterval(() => {
      dispatch({
        type: TYPES.COUNTING
      })
    }, 1000)
  },

  PASS: dispatch => {
    clearInterval(timerId)
    dispatch({
      type: TYPES.CHANGE_HIGHESTSPEED
    })
  }
}

export function reset() {
  return {
    type: TYPES.RESET,
    leftMatched: 8,
    highestSpeed: +localStorage.getItem('highestSpeed') || 9999,
    status: STATUS.READY,
    cards: shuffle(CARD_NAMES.concat(CARD_NAMES)).map(name => ({ flipped: false, cardName: name })),
    elapsedMs: 0
  }
}

export function markMatch() {
  return {
    type: TYPES.MARK_MATCH
  }
}

export function updateStatus(status) {
  return function(dispatch) {
    dispatch({
      type: TYPES.CHANGE_STATUS,
      status
    })

    statusHandler[status] && statusHandler[status](dispatch)

    return Promise.resolve()
  }
}

export function flipCard(card) {
  return {
    type: TYPES.FLIP_CARD,
    card
  }
}

export function flipCards(cards) {
  return {
    type: TYPES.FLIP_CARDS,
    cards
  }
}
