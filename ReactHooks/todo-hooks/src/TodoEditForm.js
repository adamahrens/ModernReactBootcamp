import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

export default function TodoEditForm(props) {
    const [value, handleChange, reset] = useInputState(props.task)

    return (
        <form style={{ marginLeft: "1rem" }} onSubmit={event => {
            event.preventDefault()
            props.update(props.id, value)
            reset()
            props.toggleEditing()
        }}>
            <TextField value={value} margin="normal" label="Edit Todo" onChange={handleChange} autoFocus />
        </form>

    )
}