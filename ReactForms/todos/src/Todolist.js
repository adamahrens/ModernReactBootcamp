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
        this.removeTodo = this.removeTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    componentDidMount() {
        let todos = JSON.parse(localStorage.getItem("todos"));
        if (todos == null) {
            todos = []
        }

        this.setState({ todos });
    }

    addTodo(todo) {
        let modifiedTodo = { ...todo, id: uuid(), complete: false }
        let todos = [...this.state.todos, modifiedTodo]
        this.persistTodos(todos)
        this.setState({ todos })
    }

    removeTodo(id) {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })

        this.persistTodos(todos)
        this.setState({ todos })
    }

    toggleTodo(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete }
            }

            return todo
        })

        this.persistTodos(todos)
        this.setState({ todos })
    }

    updateTodo(id, updated) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todo: updated, complete: false }
            }

            return todo
        })

        this.persistTodos(todos)
        this.setState({ todos })
    }

    persistTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    renderTodos() {
        return (
            <ul>
                { this.state.todos.map(todo => (<Todo key={todo.id} id={todo.id} complete={todo.complete} todo={todo.todo} updateTodo={this.updateTodo} removeTodo={this.removeTodo} toggleTodo={this.toggleTodo} />))}
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