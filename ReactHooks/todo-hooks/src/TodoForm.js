import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("")

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={event => {
                event.preventDefault()
                props.add(value)
                reset()
            }}>
                <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
            </form>
        </Paper>
    )
}