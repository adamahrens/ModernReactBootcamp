import Todo from "./Todo"
import { List, ListItem, Paper, Divider } from "@material-ui/core";

export default function TodoList(props) {
    const todoList = (
        <Paper>
            <List>
                {props.todos.map((todo, index) =>
                    <ListItem key={todo.id}>
                        <Todo key={todo.id} {...todo} remove={props.remove} toggle={props.toggle} update={props.update} />
                        {index < props.todos.length - 1 && <Divider />}
                    </ListItem>)
                }
            </List>
        </Paper>
    )
    return props.todos.length > 0 ? todoList : null
}