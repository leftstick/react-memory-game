import { useModel } from '@umijs/max'
import React, { useMemo } from 'react'

import { pick } from '@/helpers'
import { IClickable, STATUS } from '@/ITypes'

const READY = () => <span>Ready</span>
const PLAYING = () => <span>Playing</span>
const PASS = ({ onClick }: IClickable) => (
  <b
    className="cursor-pointer no-underline text-base"
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()

      if (onClick) {
        onClick(e)
      }
    }}
  >
    Play again
  </b>
)

function PlayStatus() {
  const { elapsedMs, status, reset } = useModel('useGameModel', (model) =>
    pick(model, 'elapsedMs', 'status', 'reset'),
  )

  const gameStatus = useMemo(() => {
    if (status === STATUS.READY) {
      return <READY />
    }

    if (status === STATUS.PLAYING) {
      return <PLAYING />
    }

    if (status === STATUS.PASS) {
      return <PASS onClick={reset} />
    }
  }, [status, reset])

  return (
    <div className="relative mt-[5px] w-full h-[20px] flex justify-center items-center text-xl font-bold">
      {gameStatus}
      <span className="absolute right-[10px] text-base font-normal">
        {elapsedMs} s
      </span>
    </div>
  )
}

export default PlayStatus
