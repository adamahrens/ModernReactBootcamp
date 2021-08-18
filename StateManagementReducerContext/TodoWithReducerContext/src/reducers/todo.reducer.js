/*
 Type will be ADD, REMOVE, EDIT, TOGGLE

*/

import uuid from "uuid/v4"

const reducer = (state, action) => {
    switch (action.type) {

        // { type: "ADD", task: "My todo to add" }
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }]

        // { type: "REMOVE", id: "23523523fsdf" }
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id)

        // { type: "TOGGLE", id: "23523523fsdf" }
        case "TOGGLE":
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)

        // { type: "EDIT", id: "23523523fsdf", task: "Updated todo text" }
        case "EDIT":
            return state.map(todo => todo.id === action.id ? { ...todo, task: action.task } : todo)
        default:
            return state
    }
}

export default reducer;