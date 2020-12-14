import './TodoForm.css';
import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { todo: '' }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }

    handleAddTodo(event) {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ todo: '' })
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form className='TodoForm' onSubmit={this.handleAddTodo}>
                <input onChange={this.handleInputChange}
                    value={this.state.todo}
                    id='todo'
                    type='text'
                    placeholder='enter a todo item'
                    name='todo' />
            </form>
        )
    }
}

export default TodoForm