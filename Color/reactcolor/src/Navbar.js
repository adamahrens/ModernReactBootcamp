import React, { Component } from 'react';
import './Navbar.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
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
            </header>
        )
    }
}

export default Navbar;