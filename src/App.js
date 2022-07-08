import './App.scss';
import AddButton from './components/OpenModalButton/OpenModalButton';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import ModalWindow from './components/ModalWindow/ModalWindow';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'doing',
        'hello'
      ]
    };
  }
  
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <ItemList items={this.state.items}/>
        <ModalWindow />
        <AddButton />
      </div>
    );
  }
}
