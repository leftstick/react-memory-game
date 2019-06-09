import { withMixin } from '../../../helpers/dva'
import { STATUS, shuffleCards } from '../../../helpers/gameData'

export default withMixin({
  namespace: 'game',
  state: {
    leftMatched: 8,
    highestSpeed: +localStorage.getItem('highestSpeed') || 9999,
    status: STATUS.READY,
    cards: shuffleCards(),
    elapsedMs: 0
  },
  effects: {
    *startGame({ payload }, { put, call, select }) {
      yield put({
        type: 'updateStatus',
        payload: STATUS.PLAYING
      })
      let res = yield select(_ => _.game)
      while (res.status === STATUS.PLAYING) {
        yield new Promise(resolve => {
          setTimeout(resolve, 1000)
        })
        yield put({
          type: 'countElapsedMs'
        })
        res = yield select(_ => _.game)
      }
    },
    *endGame({ payload }, { put, call, select }) {
      yield put({
        type: 'updateStatus',
        payload: STATUS.PASS
      })
      const { elapsedMs } = yield select(_ => _.game)
      const countPlus = elapsedMs + 1
      if (!localStorage.getItem('highestSpeed')) {
        localStorage.setItem('highestSpeed', countPlus)
      } else if (Number(localStorage.getItem('highestSpeed')) > countPlus) {
        localStorage.setItem('highestSpeed', countPlus)
      }
    }
  },
  reducers: {
    reset(state, { payload }) {
      return {
        leftMatched: 8,
        highestSpeed: +localStorage.getItem('highestSpeed') || 9999,
        status: STATUS.READY,
        cards: shuffleCards(),
        elapsedMs: 0
      }
    },
    markMatch(state, { payload }) {
      return {
        ...state,
        leftMatched: state.leftMatched - 1
      }
    },
    updateStatus(state, { payload }) {
      return {
        ...state,
        status: payload
      }
    },
    flipCards(state, { payload }) {
      return {
        ...state,
        cards: state.cards.map(c => {
          if (payload.some(p => p.id === c.id)) {
            return {
              ...c,
              flipped: !c.flipped
            }
          }
          return c
        })
      }
    },
    countElapsedMs(state, { payload }) {
      return {
        ...state,
        elapsedMs: state.elapsedMs + 1
      }
    }
  }
})
