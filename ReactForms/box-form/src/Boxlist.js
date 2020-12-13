import React, { Component } from "react";
import Box from './Box'
import NewBox from './NewBox'
import uuid from 'uuid/v4'
import './Boxlist.css';

class BoxList extends Component {

    constructor(props) {
        super(props)

        this.state = { boxes: [] }
        this.renderBoxes = this.renderBoxes.bind(this)
        this.addBox = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }

    renderBoxes() {
        return this.state.boxes.map(box => (
            <Box key={box.id} id={box.id} width={box.width} height={box.height} color={box.color} removeBox={this.removeBox} />
        ));
    }

    addBox(box) {
        let updatedBox = { ...box, id: uuid() }
        this.setState((prevState) => ({
            boxes: [...prevState.boxes, updatedBox]
        }))
    }

    removeBox(id) {
        this.setState((prevState) => ({
            boxes: prevState.boxes.filter((b) => (b.id !== id))
        }))
    }

    render() {
        return (
            <div>
                <h1>Box Generator</h1>
                <NewBox addBox={this.addBox} />
                <div className='Box-container'>
                    {this.renderBoxes()}
                </div>
            </div>
        )
    }
}

export default BoxList;