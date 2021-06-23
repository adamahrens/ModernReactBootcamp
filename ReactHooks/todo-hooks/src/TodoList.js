import Todo from "./Todo"
import { List, Paper } from "@material-ui/core";

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </List>
        </Paper>
    )
}