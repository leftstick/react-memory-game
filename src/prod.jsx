import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import VisibleMemoryGame from './containers/VisibleMemoryGame'

import { GameReducer } from './store/reducer'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

const store = createStore(GameReducer, compose(applyMiddleware(thunkMiddleware)))

render(VisibleMemoryGame)

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('memory-game')
  )
}
