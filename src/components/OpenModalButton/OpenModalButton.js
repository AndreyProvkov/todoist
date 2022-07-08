import React, { Component } from 'react'

export default class OpenModalButton extends Component {
  render() {
    return (
      <button className='btn-add' onClick={this.props.edit ? undefined : this.props.openModal}>+</button>
    )
  }
}
