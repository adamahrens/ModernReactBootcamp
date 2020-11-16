import React, { Component } from 'react'
import Dice from './Dice'

class RollDice extends Component {

    static defaultProps = {
        dice: ['1', '2', '3', '4', '5', '6']
    }

    constructor(props) {
        super(props);

        this.state = { dice1: '2', dice2: '4', isRolling: false };
        this.rollDice = this.rollDice.bind(this)
    }

    rollDice() {
        let die1 = Math.floor(Math.random() * this.props.dice.length)
        let die2 = Math.floor(Math.random() * this.props.dice.length)
        console.log(`Rolling ${die1} ${die2}`)
        this.setState({ dice1: this.props.dice[die1], dice2: this.props.dice[die2], isRolling: true })

        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000);
    }

    render() {
        let buttonText = this.state.isRolling ? 'Rolling' : 'Roll Dice'
        return (
            <div>
                <h1>Roll Some Dice!</h1>
                <div className="dice-container">
                    <Dice number={this.state.dice1} rolling={this.state.isRolling} />
                    <Dice number={this.state.dice2} rolling={this.state.isRolling} />
                </div>
                <button disabled={this.state.isRolling} onClick={this.rollDice}>{buttonText}</button>
            </div>
        )
    }
}

export default RollDice;