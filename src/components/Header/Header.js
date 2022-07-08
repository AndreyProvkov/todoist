import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <h1 className='header__title'>Сегодня</h1>
        <button className='btn-edit header__btn-edit'>Править</button>
      </header>
    )
  }
}
