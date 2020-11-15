import React, { Component } from 'react'
import Dice from './Dice'

class RollDice extends Component {
    render() {
        return (
            <div>
                <h1>Roll Some Dice!</h1>
                <Dice number="1" />
                <Dice number="2" />
                <button>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;