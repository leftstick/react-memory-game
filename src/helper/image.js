import { toURLName } from './string'

import URL_8_BALL from '../assets/8-ball.png'
import URL_BAKED_POTATO from '../assets/baked-potato.png'
import URL_DINOSAUR from '../assets/dinosaur.png'
import URL_KRONOS from '../assets/kronos.png'
import URL_ROCKET from '../assets/rocket.png'
import URL_SKINNY_UNICORN from '../assets/skinny-unicorn.png'
import URL_THAT_GUY from '../assets/that-guy.png'
import URL_ZEPPELIN from '../assets/zeppelin.png'
import URL_BACK from '../assets/back.png'

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

export function getImage(str) {
  return IMAGE_URLS[toURLName(str)]
}
