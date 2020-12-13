
import React, { Component } from "react";
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props)

        this.handleRemoveBox = this.handleRemoveBox.bind(this)
    }

    handleRemoveBox() {
        this.props.removeBox(this.props.id)
    }

    render() {
        let style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color
        }

        return (
            <div className='Box' style={style}>
                <button onClick={this.handleRemoveBox} className='btn btn-outline-danger'>X</button>
            </div>
        )
    }
}

export default Box;