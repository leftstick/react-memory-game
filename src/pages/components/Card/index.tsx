import { useModel } from '@umijs/max'
import classnames from 'classnames'
import React from 'react'

import { getImage, pick } from '@/helpers'
import { ICard } from '@/ITypes'

interface ICardProps {
  style?: React.CSSProperties
  value: ICard
}

function Card({ style, value }: ICardProps) {
  const { flipped, name } = value

  const { flipCard } = useModel('useGameModel', (model) =>
    pick(model, 'flipCard'),
  )

  return (
    <div
      className="md:w-[100px] sm:w-[90px] md:h-[121px] sm:h-[108px] mr-[3px] cursor-pointer relative"
      onClick={() => flipCard(value)}
      style={style}
    >
      <div
        className={classnames(
          'w-full h-full transition-transform duration-1000 style-3d relative',
          { ['rotatey-180']: flipped },
        )}
      >
        <img
          className="absolute block w-full h-full backface-hidden bg-blue-600 rotatey-180"
          src={getImage(name)}
          alt="card"
        />
        <img
          className="absolute block w-full h-full backface-hidden bg-blue-600 rotatey-0"
          src={getImage('URL_BACK')}
          alt="back-card"
        />
      </div>
    </div>
  )
}

export default Card
