import React from 'react'

import Logo from '../Logo'
import MatchInfo from '../MatchInfo'
import Score from '../Score'

function Dashboard() {
  return (
    <div className="w-full h-[100px] flex justify-between items-center">
      <Logo />
      <MatchInfo />
      <Score />
    </div>
  )
}

export default Dashboard
