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
    }

    renderBoxes() {
        return this.state.boxes.map(box => (
            <Box key={box.id} width={box.width} height={box.height} color={box.color} />
        ));
    }

    addBox(box) {
        let updatedBox = { ...box, id: uuid() }
        this.setState((prevState) => ({
            boxes: [...prevState.boxes, updatedBox]
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