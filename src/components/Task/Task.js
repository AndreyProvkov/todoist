import React, { Component } from 'react'

export default class Task extends Component { 
  render() {
    return (
        <div className='task' onClick={this.props.edit ? ((e) => this.props.handleTask(e, this.props.index)) : undefined}>
            <label className='task__block'>
                <input className='task__checkbox' type="checkbox" />
                <span className='task__text'>{this.props.task}</span>
            </label>
        </div>
    )
  }
}
