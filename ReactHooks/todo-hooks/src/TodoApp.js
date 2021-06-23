import React, { useState } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

/*
TodoApp
    TodoForm
    TodoList
        Todo
            id, task, completed
*/

export default function TodoApp() {
    const examples = [
        { id: 1, task: "Practice Guitar", completed: false },
        { id: 2, task: "Work on React Hooks", completed: false },
        { id: 3, task: "Go for a Run", completed: false },
        { id: 4, task: "Read chapter of book", completed: true }
    ]

    const [todos, setTodos] = useState(examples)
    const addTodo = newTodo => {
        setTodos([...todos, { id: 5, task: newTodo, completed: false }])
    }

    return (
        <Paper className="TodoApp" elevation={0} style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#FAFAFA" }}>
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todos w/ Hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm add={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    )
}