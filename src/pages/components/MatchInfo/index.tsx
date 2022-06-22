import { useModel } from '@umijs/max'
import React from 'react'

import { pick } from '@/helpers'

function MatchInfo() {
  const { leftMatched } = useModel('useGameModel', (model) =>
    pick(model, 'leftMatched'),
  )

  return (
    <div className="w-[120px] p-[10px] bg-[#bbada0] rounded-md flex flex-col justify-between items-center ">
      <div className="text-lg font-bold text-center text-[#eae0d1]">
        Pairs Left To Match
      </div>
      <h2 className="text-white font-bold">{leftMatched}</h2>
    </div>
  )
}

export default MatchInfo
