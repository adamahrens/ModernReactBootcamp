import { ListItem, ListItemText, Divider } from "@material-ui/core";

export default function Todo(props) {
    return (
        <>
            <ListItem>
                <ListItemText>
                    {props.task}
                </ListItemText>
            </ListItem>
            <Divider />
        </>
    )
}