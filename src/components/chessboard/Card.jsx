import React from 'react'
import PropTypes from 'prop-types'

import { getImage } from '../../helper/image'

import S from './Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.handleFlip = this.handleFlip.bind(this)
  }

  handleFlip() {
    if (this.props.option.flipped) {
      return
    }
    this.props.onFlipCard(this.props.option)
  }

  render() {
    const flippedClass = this.props.option.flipped ? S.flipped : ''
    return (
      <div styleName="container" onClick={this.handleFlip}>
        <div styleName="card" className={flippedClass}>
          <img styleName="front" src={getImage(this.props.option.cardName)} />
          <img styleName="back" src={getImage('back')} />
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  option: PropTypes.shape({
    flipped: PropTypes.bool,
    cardName: PropTypes.string
  }).isRequired,
  onFlipCard: PropTypes.func.isRequired
}

export default Card
