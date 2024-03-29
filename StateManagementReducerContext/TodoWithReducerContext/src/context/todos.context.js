import React, { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todoReducer from "../reducers/todo.reducer"

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();

// Build another context to improve performance of renders in child components
export const DispatchTodosContext = createContext();

export function TodosProvider(props) {
  // Old way before using a Reducer
  // const todosFunctions = useTodoState(defaultTodos);
  const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer)

  return (
    <TodosContext.Provider value={todos}>
      <DispatchTodosContext.Provider value={dispatch}>
        {props.children}
      </DispatchTodosContext.Provider>
    </TodosContext.Provider>
  );
}
