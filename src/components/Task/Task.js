import React, { Component } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.changeTask = this.changeTask.bind(this);
  }

  changeTask(e) {
    // if (e.target.className === 'task__text') {
    //   e.preventDefault();
      
    // }
  }
  
  render() {
    return (
        <div className='task' onClick={this.props.edit ? this.changeTask : undefined}>
            <label className='task__block'>
                <input className='task__checkbox' type="checkbox" />
                <span className='task__text'>{this.props.task}</span>
            </label>
        </div>
    )
  }
}
