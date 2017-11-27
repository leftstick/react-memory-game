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
  return state
}

function cards(state = [], action) {
  if (action.type === TYPES.RESET) {
    return action.cards
  }
  return state
}

function elapsedMs(state = 0, action) {
  if (action.type === TYPES.RESET) {
    return action.elapsedMs
  }
  return state
}
