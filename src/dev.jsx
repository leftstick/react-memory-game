import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { AppContainer } from 'react-hot-loader'
import VisibleMemoryGame from './containers/VisibleMemoryGame'

import { GameReducer } from './store/reducer'

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

const store = createStore(
  GameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
