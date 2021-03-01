import React, { Component } from 'react';
import Message from './Message';
import './VendingMachine.css'

class VendingMachine extends Component {
    render() {
        return (<div className="VendingMachine">
            <h1>Vending Machine</h1>
            <Message>
                <h1>Grab a snack and stay awahile</h1>
            </Message>
        </div>)
    }
}

export default VendingMachine;