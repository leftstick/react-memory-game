import { combineReducers } from 'redux'
import { TYPES } from './actionType'

export const GameReducer = combineReducers({
  leftMatched,
  highestSpeed,
  status,
  cards,
  elapsedMs
})

function leftMatched(state = 0, action) {
  if (action.type === TYPES.RESET) {
    return action.leftMatched
  }
  if (action.type === TYPES.MARK_MATCH) {
    return state - 1
  }
  return state
}

function highestSpeed(state = 0, action) {
  if (action.type === TYPES.RESET) {
    return action.highestSpeed
  }
  return state
}

function status(state = '', action) {
  if (action.type === TYPES.RESET) {
    return action.status
  }
  if (action.type === TYPES.CHANGE_STATUS) {
    return action.status
  }
  return state
}

function cards(state = [], action) {
  if (action.type === TYPES.RESET) {
    return action.cards
  }
  if (action.type === TYPES.FLIP_CARD) {
    return state.map(card => {
      if (card === action.card) {
        card.flipped = !card.flipped
      }
      return card
    })
  }
  if (action.type === TYPES.FLIP_CARDS) {
    return state.map(card => {
      if (action.cards.indexOf(card) >= 0) {
        card.flipped = !card.flipped
      }
      return card
    })
  }
  return state
}

function elapsedMs(state = 0, action) {
  if (action.type === TYPES.RESET) {
    return action.elapsedMs
  }
  if (action.type === TYPES.COUNTING) {
    return state + 1
  }
  if (action.type === TYPES.CHANGE_HIGHESTSPEED) {
    if (!localStorage.getItem('highestSpeed')) {
      localStorage.setItem('highestSpeed', state)
    } else if (localStorage.getItem('highestSpeed') > state) {
      localStorage.setItem('highestSpeed', state)
    }
    return state
  }
  return state
}
