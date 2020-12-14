import './Todo.css';
import React, { Component } from "react";
import { TrashIcon } from '@primer/octicons-react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.handleToggleTodo = this.handleToggleTodo.bind(this)
    }

    handleRemoveTodo(event) {
        event.stopPropagation()
        event.preventDefault()
        this.props.removeTodo(this.props.id)
    }

    handleToggleTodo(event) {
        event.stopPropagation()
        event.preventDefault()
        this.props.toggleTodo(this.props.id)
    }

    render() {
        let completedState = this.props.complete ? 'Todo complete' : 'Todo'
        return (
            <li onClick={this.handleToggleTodo} className={completedState}>{this.props.todo}<span onClick={this.handleRemoveTodo}><TrashIcon size={24} /></span></li>
        )
    }
}

export default Todo