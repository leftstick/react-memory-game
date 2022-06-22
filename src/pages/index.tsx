import React from 'react'

import Chessboard from './components/Chessboard'
import Dashboard from './components/Dashboard'
import PlayStatus from './components/PlayStatus'

export default () => {
  return (
    <div className="min-w-[390px] md:w-[450px] sm:w-[390px] md:border-4 sm:border-t-2 sm:border-b-2 sm:border-l-0 sm:border-r-0 border-solid border-gray-300 bg-[#faf8ef] rounded-sm flex flex-col md:p-2.5 sm:p-1">
      <Dashboard />
      <Chessboard />
      <PlayStatus />
    </div>
  )
}
