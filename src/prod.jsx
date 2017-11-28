import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleMemoryGame from './containers/VisibleMemoryGame'

import { GameReducer } from './store/reducer'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

const store = createStore(GameReducer)

render(VisibleMemoryGame)

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('memory-game')
  )
}
