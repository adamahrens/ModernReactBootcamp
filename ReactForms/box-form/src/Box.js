
import React, { Component } from "react";
import './Box.css';

class Box extends Component {
    render() {
        let style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color
        }

        return (
            <div className='Box' style={style}>
            </div>
        )
    }
}

export default Box;