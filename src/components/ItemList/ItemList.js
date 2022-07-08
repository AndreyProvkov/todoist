import React, { Component } from 'react'
import Item from '../Item/Item'

export default class ItemList extends Component {
    
    
    renderEmptyList() {
        return 
    }

    renderItems() {

    }
  
    render() {
        const items = [];
        let length = this.props.items.length;

        if (length === 0) {
            return <p>Список задач пуст</p>;
        } else {
            this.props.items.forEach((item, index) => { 
                items.push(
                    <Item item={item} key={index} />
                )
            });
        }

        return (
            <div>
                {items}
            </div>
        );
    }
}
