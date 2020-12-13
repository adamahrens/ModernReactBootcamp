import React, { Component } from "react";
import './NewBox.css';

class NewBox extends Component {
    constructor(props) {
        super(props)
        this.state = { width: '', height: '', color: '' }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddBox = this.handleAddBox.bind(this)
    }

    handleAddBox(event) {
        event.preventDefault()
        this.props.addBox(this.state)
        this.setState({ width: '', height: '', color: '' })
    }

    handleInputChange(event) {
        if (event.target.name !== 'color') {
            this.setState({ [event.target.name]: parseInt(event.target.value) })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    render() {
        return (
            <form className='NewBox' onSubmit={this.handleAddBox}>
                <div className="form-row">
                    <div className='col w-25'>
                        <label htmlFor='width'>Width</label>
                        <input onChange={this.handleInputChange} value={this.state.width} id='width' type='text' placeholder='width' name='width' className='form-control' />
                    </div>
                    <div className='col w-25'>
                        <label htmlFor='height'>Height</label>
                        <input onChange={this.handleInputChange} value={this.state.height} id='height' type='text' placeholder='height' name='height' className='form-control' />
                    </div>
                    <div className='col w-25'>
                        <label htmlFor='color'>Color</label>
                        <input onChange={this.handleInputChange} value={this.state.color} id='color' type='text' placeholder='color' name='color' className='form-control' />
                    </div>
                </div>
                <button id='add' type='Submit' className='btn btn-primary'>Add Box</button>
            </form>
        )
    }
}

export default NewBox;