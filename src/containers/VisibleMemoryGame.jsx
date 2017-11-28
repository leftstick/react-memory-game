import { connect } from 'react-redux'

import { reset } from '../store/action'

import MemoryGame from '../components/MemoryGame'

export default connect(null, dispatch => {
  return {
    reset: () => {
      dispatch(reset())
    }
  }
})(MemoryGame)
