import React from 'react'
import ReactDOM from 'react-dom'
import MemoryGame from './components/MemoryGame'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

render(MemoryGame)

function render(Component) {
  return ReactDOM.render(<Component />, document.getElementById('memory-game'))
}
