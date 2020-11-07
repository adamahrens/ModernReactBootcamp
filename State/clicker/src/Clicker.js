import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);

        this.state = { number: 1 };
        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber(event) {
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        this.setState({ number: randomNumber });
    }

    render() {
        let winner = this.state.number === 7 ? true : false
        return (<div>
            <h1>Number is {this.state.number}</h1>
            { !winner && <button onClick={this.updateNumber}>Random Number</button>}
            { winner && <p>Congrats you got lucky number seven</p>}

        </div>)
    }
}

export default Clicker;