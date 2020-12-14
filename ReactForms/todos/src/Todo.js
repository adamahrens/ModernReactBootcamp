import './Todo.css';
import React, { Component } from "react";
import { TrashIcon, PencilIcon, ThumbsupIcon, ThumbsdownIcon } from '@primer/octicons-react'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { editing: false, todo: this.props.todo }
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
        this.handleToggleTodo = this.handleToggleTodo.bind(this)
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this)
        this.handleStopEditing = this.handleStopEditing.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleEditTodo = this.handleEditTodo.bind(this)
    }

    handleRemoveTodo(event) {
        event.stopPropagation()
        event.preventDefault()
        this.props.removeTodo(this.props.id)
    }

    handleEditTodo(event) {
        event.preventDefault()
        this.setState({ editing: true })
    }

    handleUpdateTodo(event) {
        event.preventDefault()
        this.props.updateTodo(this.props.id, this.state.todo)
        this.setState({ editing: false })
    }

    handleStopEditing(event) {
        event.preventDefault()
        this.setState({ editing: false })
    }

    handleToggleTodo(event) {
        event.stopPropagation()
        event.preventDefault()
        this.props.toggleTodo(this.props.id)
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    renderTodo() {
        let completedState = this.props.complete ? 'Todo complete' : 'Todo'
        return (
            <li onClick={this.handleToggleTodo} className={completedState}>{this.props.todo}<span onClick={this.handleRemoveTodo}><TrashIcon size={24} /></span><span onClick={this.handleEditTodo}><PencilIcon size={24} /></span></li>
        )
    }

    renderEditing() {
        return (
            <li className='Todo-Edit'>
                <form className='Todo-Form'>
                    <input onChange={this.handleInputChange}
                        value={this.state.todo}
                        id='todo'
                        type='text'
                        placeholder='enter a todo item'
                        name='todo' />
                    <span onClick={this.handleUpdateTodo}><ThumbsupIcon size={24} /></span>
                    <span onClick={this.handleStopEditing}><ThumbsdownIcon size={24} /></span>
                </form>
            </li>
        )
    }

    render() {
        let element = this.state.editing ? this.renderEditing() : this.renderTodo()
        return element
    }
}

export default Todo