import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { AppContainer } from 'react-hot-loader'
import VisibleMemoryGame from './containers/VisibleMemoryGame'

import { GameReducer } from './store/reducer'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(GameReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

render(VisibleMemoryGame)

if (module.hot) {
  module.hot.accept('./containers/VisibleMemoryGame', () => {
    render(VisibleMemoryGame)
  })
}

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('memory-game')
  )
}
