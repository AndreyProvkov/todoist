import React, { Component } from 'react'

export default class ModalWindow extends Component {
  render() {
    let isEdit = this.props.edit;
    let isActive = this.props.active;
    let btn;

    if (isActive && !isEdit) {
      btn = (
        <button className='btn-add modal__btn-add' onClick={this.props.addTask}>Добавить</button>
      );
    }
    if (isActive && isEdit) {
      btn = (
        <button className='btn-save modal__btn-save' onClick={this.props.save}>Сохранить</button>
      )
    }

    return (
      <div className='modal'>
        <textarea className='modal__input' value={this.props.value} onChange={this.props.handleChange}></textarea>
        <button className='btn-close modal__btn-close' onClick={this.props.closeModal}>Закрыть</button>
        {btn}
      </div>
    )
  }
}
