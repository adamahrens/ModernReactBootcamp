import React, { Component } from 'react';
import './Navbar.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false }
        this.handleChange = this.handleChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleChange(event) {
        this.setState({ format: event.target.value, open: true })
        this.props.handleChange(event.target.value)
    }

    closeSnackbar() {
        this.setState({ open: false })
    }

    render() {
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">colorPicker</a>
                </div>


                <div className="Navbar-slider">
                    <span>Level: {this.props.level}</span>
                    <Slider
                        defaultValue={this.props.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.props.changeLevel} />
                </div>
                <div className="Navbar-select">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #F2F2F2</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 200, 230)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(100, 100, 100, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    onClose={this.closeSnackbar}
                    action={[<IconButton color="inherit" onClick={this.closeSnackbar}><CloseIcon /></IconButton>]}
                    message={<span id="message-id">Format changed to {this.state.format}</span>}
                    autoHideDuration={3000}
                    open={this.state.open}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}></Snackbar>
            </header>
        )
    }
}

export default Navbar;