import { connect } from 'react-redux'

import Dashboard from '../../components/dashboard/Dashboard'

export default connect(state => {
  return {
    leftMatched: state.leftMatched,
    highestSpeed: state.highestSpeed
  }
})(Dashboard)
