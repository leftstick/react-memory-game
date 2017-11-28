import { connect } from 'react-redux'

import { reset } from '../../store/action'

import PlayStatus from '../../components/footer/PlayStatus'

export default connect(
  state => {
    return {
      elapsedMs: state.elapsedMs,
      status: state.status
    }
  },
  dispatch => {
    return {
      reset: () => {
        dispatch(reset())
      }
    }
  }
)(PlayStatus)
