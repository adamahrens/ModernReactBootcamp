import { ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import useToggleState from "./hooks/useToogleState";
import TodoEditForm from "./TodoEditForm";

export default function Todo(props) {
    const [isEditing, toggle] = useToggleState(false)

    return (
        <>
            {
                isEditing ?
                    <TodoEditForm {...props} toggleEditing={toggle} /> :
                    <>
                        <Checkbox checked={props.completed} onClick={() => props.toggle(props.id)} />
                        <ListItemText style={{ textDecoration: props.completed ? "line-through" : "none" }}>
                            {props.task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="edit" onClick={toggle}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => props.remove(props.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
            }
        </>
    )
}