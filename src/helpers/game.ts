import URL_8_BALL from '@/assets/8-ball.png'
import URL_BAKED_POTATO from '@/assets/baked-potato.png'
import URL_DINOSAUR from '@/assets/dinosaur.png'
import URL_KRONOS from '@/assets/kronos.png'
import URL_ROCKET from '@/assets/rocket.png'
import URL_SKINNY_UNICORN from '@/assets/skinny-unicorn.png'
import URL_THAT_GUY from '@/assets/that-guy.png'
import URL_ZEPPELIN from '@/assets/zeppelin.png'
import URL_BACK from '@/assets/back.png'

export function shuffle(arr: any[]) {
  const newArr = arr.slice()
  for (let i = newArr.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let x = newArr[i - 1]
    newArr[i - 1] = newArr[j]
    newArr[j] = x
  }
  return newArr
}

export function uuid(): string {
  let result, i, j
  result = ''
  for (j = 0; j < 32; j++) {
    if (j === 8 || j === 12 || j === 16 || j === 20) {
      result = result + '-'
    }
    i = Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase()
    result = result + i
  }
  return result
}

const IMAGE_URLS = {
  URL_8_BALL,
  URL_BAKED_POTATO,
  URL_DINOSAUR,
  URL_KRONOS,
  URL_ROCKET,
  URL_SKINNY_UNICORN,
  URL_THAT_GUY,
  URL_ZEPPELIN,
  URL_BACK
}

export function getImage(name: keyof typeof IMAGE_URLS): string {
  return IMAGE_URLS[name]
}

export function shuffleCards(): ICard[] {
  const CARD_NAMES = Object.keys(IMAGE_URLS).filter(s => s !== 'URL_BACK')

  return shuffle([...CARD_NAMES, ...CARD_NAMES]).map(name => ({
    id: uuid(),
    flipped: false,
    name
  }))
}

export interface ICard {
  id: string
  flipped: boolean
  name: keyof typeof IMAGE_URLS
}
