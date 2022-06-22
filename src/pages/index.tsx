import React from 'react'

import Chessboard from './components/Chessboard'
import Dashboard from './components/Dashboard'
import PlayStatus from './components/PlayStatus'

export default () => {
  return (
    <div className="min-w-[428px] md:w-[450px] sm:w-[428px] border-4 border-solid border-gray-300 bg-[#faf8ef] rounded-sm flex flex-col p-2.5">
      <Dashboard />
      <Chessboard />
      <PlayStatus />
    </div>
  )
}
