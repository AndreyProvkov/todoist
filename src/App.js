import './App.scss';
import OpenModalButton from './components/OpenModalButton/OpenModalButton';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import ModalWindow from './components/ModalWindow/ModalWindow';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      active: false,
      edit: false
    };
    this.addTask = this.addTask.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.edit = this.edit.bind(this);
  }

  addTask(task) {
    let normalTask = task.trim();
    
    if (normalTask.length) {
      this.setState({tasks: this.state.tasks.concat(normalTask)});
    }
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({active: false});
  }

  edit() {
    this.setState({edit: !this.state.edit});
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header 
          edit={this.state.edit} 
          onEdit={this.edit} 
          active={this.state.active}
          tasks={this.state.tasks}
        />
        <TaskList tasks={this.state.tasks} edit={this.state.edit} />
        {
          this.state.active && 
          <ModalWindow addTask={this.addTask} closeModal={this.closeModal} edit={this.state.edit} active={this.state.active}/>
        }
        <OpenModalButton openModal={this.openModal} edit={this.state.edit}/>
      </div> 
    );
  }
}
