import { Paper, TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

export default function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("")

    return (
        <Paper>
            <form onSubmit={event => {
                event.preventDefault()
                props.add(value)
                reset()
            }}>
                <TextField value={value} onChange={handleChange} />
            </form>
        </Paper>
    )
}