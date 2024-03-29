import { useModel } from '@umijs/max'
import React from 'react'

import { pick } from '@/helpers'

function Score() {
  const { highestSpeed } = useModel('useGameModel', (model) =>
    pick(model, 'highestSpeed'),
  )

  return (
    <div className="md:w-[120px] sm:w-[110px] p-[10px] h-full bg-[#bbada0] rounded-md flex flex-col justify-between items-center">
      <span className="text-lg font-bold text-center text-[#eae0d1]">
        Highest Speed
      </span>
      <h2 className="text-white font-bold">{highestSpeed}</h2>
    </div>
  )
}

export default Score
