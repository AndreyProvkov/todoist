import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    let isActive = this.props.active;
    let handle = undefined;

    if (!isActive) {
      handle = this.props.onEdit;
    }

    return (
      <header className='header'>
        <h1 className='header__title'>Сегодня</h1>
        {
          this.props.tasks.length === 0 ? '' :
            <button className='btn-edit header__btn-edit' onClick={handle}>
            {this.props.edit ? 'Отменить' : 'Править'}
          </button>
        }
      </header>
    )
  }
}
