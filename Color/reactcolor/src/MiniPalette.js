import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#DAE1E4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

function MiniPalette(props) {
    const { classes, paletteName, emoji, id, colors } = props
    const miniBoxes = colors.map(color => (
        <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }}>
        </div>
    ))
    return (
        <Link to={`/palette/${id}`} style={{ textDecoration: 'none' }}>
            <div className={classes.root}>
                <div className={classes.colors}>
                    {miniBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName}
                    <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        </Link>
    )
}

// Higher Order Component
// Styles becomes a classes prop passed to MiniPalette
export default withStyles(styles)(MiniPalette);