import { useLocalStorageState } from 'ahooks'
import { useCallback, useRef, useState } from 'react'

import { shuffleCards } from '@/helpers'
import { ICard, STATUS } from '@/ITypes'

export default function useGameModel() {
  const [leftMatched, setLeftMatched] = useState(8)
  const [status, setStatus] = useState(STATUS.READY)
  const [allCards, setAllCards] = useState<ICard[]>(shuffleCards())
  const [lastCard, setLastCard] = useState<ICard>()
  const [elapsedMs, setElapsedMs] = useState(0)
  const [highestSpeed, setHighestSpeed] = useLocalStorageState('highestSpeed', {
    defaultValue: 9999,
  })
  const gameCounter = useRef<number>()

  const reset = useCallback(() => {
    setLeftMatched(8)
    setStatus(STATUS.READY)
    setAllCards(shuffleCards())
    setElapsedMs(0)
  }, [])

  const startGame = useCallback(() => {
    setStatus(STATUS.PLAYING)
    gameCounter.current = window.setInterval(() => {
      setElapsedMs((s) => s + 1)
    }, 1000)
  }, [])

  const endGame = useCallback(() => {
    setStatus(STATUS.PASS)
    clearInterval(gameCounter.current)
    gameCounter.current = undefined
    setHighestSpeed((s) => (s! > elapsedMs ? elapsedMs : s!))
  }, [elapsedMs, setHighestSpeed])

  const flipCards = useCallback((cards: ICard[]) => {
    setAllCards((allCards) =>
      allCards.map((a) => {
        if (cards.some((c) => c.id === a.id)) {
          return {
            ...a,
            flipped: !a.flipped,
          }
        }
        return a
      }),
    )
  }, [])

  const flipCard = useCallback(
    (card: ICard) => {
      flipCards([card])

      if (status === STATUS.READY) {
        startGame()
      }
      if (!lastCard) {
        return setLastCard(card)
      }

      if (lastCard !== card && lastCard.name === card.name) {
        setLastCard(undefined)

        setLeftMatched((l) => l - 1)

        if (leftMatched === 1) {
          endGame()
        }
        return
      }
      let cachedLastCard = lastCard
      setLastCard(undefined)

      setTimeout(() => {
        flipCards([cachedLastCard, card])
      }, 1000)
    },
    [startGame, endGame, flipCards, lastCard, leftMatched, status],
  )

  return {
    leftMatched,
    status,
    cards: allCards,
    elapsedMs,
    highestSpeed,
    reset,
    flipCard,
  }
}
