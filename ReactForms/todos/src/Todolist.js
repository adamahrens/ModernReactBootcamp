import './Todolist.css';
import React, { Component } from "react";
import TodoForm from './TodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = { todos: [] }
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(todo) {
        let modifiedTodo = { ...todo, id: uuid() }
        this.setState((prevState) => ({
            todos: [...prevState.todos, modifiedTodo]
        }))
    }

    renderTodos() {
        return (
            <ul>
                { this.state.todos.map(todo => (<Todo key={todo.id} id={todo.id} todo={todo.todo} />))}
            </ul>
        )
    }

    render() {
        return (
            <div className="Todolist">
                <h1>todo<span>list</span></h1>
                <h2>A simple todo list build with react & localstorage</h2>
                <TodoForm addTodo={this.addTodo} />
                {this.renderTodos()}
            </div>
        )
    }
}

export default TodoList