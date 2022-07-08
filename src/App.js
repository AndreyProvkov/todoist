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
      currentIndex: -1,
      active: false,
      edit: false,
      value: '',
    };
    this.addTask = this.addTask.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.edit = this.edit.bind(this);
    this.handleTask = this.handleTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask() {
    if (this.state.value.trim().length > 0) {
      this.setState({tasks: this.state.tasks.concat(this.state.value.trim())});
    }
  }

  openModal() {
    this.setState({active: true});
  }

  closeModal() {
    this.setState({
      active: false,
      value: '',
    });
  }

  edit() {
    this.setState({edit: !this.state.edit});
  }

  changeTask() {
    let arr = this.state.tasks;
    if (this.state.value.trim().length > 0) {
      arr[this.state.currentIndex] = this.state.value.trim();
      this.setState({
        tasks: arr,
        active: false,
      });
    }
    
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleTask(e, index) {
    this.setState({currentIndex: index});

    if (e.target.className === 'task__text') {
      e.preventDefault();
      this.setState({value: this.state.tasks[index]});
      this.openModal();
    }
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
        <TaskList tasks={this.state.tasks} edit={this.state.edit} handleTask={this.handleTask}/>
        {
          this.state.active && 
          <ModalWindow 
            addTask={this.addTask} 
            closeModal={this.closeModal} 
            edit={this.state.edit} 
            active={this.state.active} 
            save={this.changeTask}
            handleChange={this.handleChange}
            value={this.state.value}
          />
        }
        <OpenModalButton openModal={this.openModal} edit={this.state.edit}/>
      </div> 
    );
  }
}
