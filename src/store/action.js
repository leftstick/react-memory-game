import { TYPES } from './actionType'
import { STATUS } from '../model/status'
import { CARD_NAMES } from '../model/card'

import { shuffle } from '../helper/array'

export function reset() {
  return {
    type: TYPES.RESET,
    leftMatched: 8,
    highestSpeed: localStorage.getItem('highestSpeed') || 9999,
    status: STATUS.READY,
    cards: shuffle(CARD_NAMES.concat(CARD_NAMES)).map(name => ({ flipped: false, cardName: name })),
    elapsedMs: 0
  }
}
