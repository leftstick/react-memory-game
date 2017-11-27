import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Logo.css'

class Logo extends Component {
  render() {
    return (
      <h1 styleName="logo">
        <a href="https://github.com/leftstick/react-memory-game" target="_blank">
          Memory
        </a>
      </h1>
    )
  }
}

export default Logo
