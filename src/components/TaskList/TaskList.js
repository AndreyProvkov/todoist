import React, { Component } from 'react'
import Task from '../Task/Task'

export default class TaskList extends Component {
    render() {
        const tasks = [];
        let length = this.props.tasks.length;

        if (length === 0) {
            return <p>Список задач пуст</p>;
        } else {
            this.props.tasks.forEach((task, index) => { 
                tasks.push(
                    <Task task={task} key={index} edit={this.props.edit} handleTask={this.props.handleTask} index={index}/>
                )
            });
        }

        return (
            <div>
                {tasks}
            </div>
        );
    }
}
