import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosFunctions = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosFunctions}>
      {props.children}
    </TodosContext.Provider>
  );
}
