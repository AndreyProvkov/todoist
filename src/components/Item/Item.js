import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
        <div className='item'>
            <label>
                <input className='item__checkbox' type="checkbox" />
                <span className='item__text'>{this.props.item}</span>
            </label>
        </div>
    )
  }
}
