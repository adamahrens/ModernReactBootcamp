import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Snack extends Component {
    render() {
        return (<div className="Snack">
            <h1>I'm {this.props.snack}</h1>
            <Link to='/'>Home</Link>
        </div>)
    }
}

export default Snack;