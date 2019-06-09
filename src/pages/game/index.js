import React from 'react'

import Dashboard from './components/Dashboard'
import Chessboard from './components/Chessboard'
import PlayStatus from './components/PlayStatus'

import styles from './index.less'

class Game extends React.Component {
  render() {
    return (
      <div className={styles.memoryGame}>
        <Dashboard />
        <Chessboard />
        <PlayStatus />
      </div>
    )
  }
}

export default Game
