import React, { useState, useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid"

/*
TodoApp
    TodoForm
    TodoList
        Todo
            id, task, completed
*/

export default function TodoApp() {
    const defaultTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    const [todos, setTodos] = useState(defaultTodos)

    useEffect(() => {
        // Write to local storage
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = newTodo => {
        setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])
    }

    const removeTodo = id => {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    const updateTodo = (id, updatedTask) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo)
        setTodos(updatedTodos)
    }

    const toggleTodo = id => {
        const toggledTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(toggledTodos)
    }

    return (
        <Paper className="TodoApp" elevation={0} style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#FAFAFA" }}>
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todos w/ Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm add={addTodo} />
                    <TodoList todos={todos} remove={removeTodo} toggle={toggleTodo} update={updateTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}