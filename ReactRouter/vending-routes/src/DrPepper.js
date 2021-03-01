import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DrPepper extends Component {
    render() {
        return (<div className="Snack">
            <h1>Dr. Pepper</h1>
            <Link to='/'>Home</Link>
        </div>)
    }
}

export default DrPepper;