import React, { Component } from 'react'

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    let isEdit = this.props.edit;
    let isActive = this.props.active;
    let btn;

    if (isActive && !isEdit) {
      btn = (
        <button className='btn-add modal__btn-add' onClick={() => this.props.addTask(this.state.value)}>Добавить</button>
      );
    }
    if (isActive && isEdit) {
      btn = (
        <button className='btn-save modal__btn-save'>Сохранить</button>
      )
    }

    return (
      <div className='modal'>
        <textarea className='modal__input' value={this.state.value} onChange={this.handleChange}>Enter</textarea>
        <button className='btn-close modal__btn-close' onClick={this.props.closeModal}>Закрыть</button>
        {btn}
      </div>
    )
  }
}
