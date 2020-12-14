import './Todo.css';
import React, { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <li className='Todo'>{this.props.todo}</li>
        )
    }
}

export default Todo