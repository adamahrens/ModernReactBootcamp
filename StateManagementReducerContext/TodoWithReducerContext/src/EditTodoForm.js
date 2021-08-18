import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchTodosContext } from "./context/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchTodosContext);
  const [value, handleChange, reset] = useInputState(task);
  console.log("EDIT FORM RENDER!!!");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        //  Old way
        // editTodo(id, value);
        dispatch({ type: "EDIT", id: id, task: value })
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditTodoForm;
