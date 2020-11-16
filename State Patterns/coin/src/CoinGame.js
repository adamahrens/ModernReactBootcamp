import React, { Component } from 'react'
import Coin from './Coin'
import './CoinGame.css'

const HEADS = 1
const TAILS = 0
const HEADS_SRC = "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
const TAILS_SRC = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/1024px-US_50_Cent_Rev.png"

class CoinGame extends Component {
    constructor(props) {
        super(props)
        this.state = { tosses: [] }

        this.flipCoin = this.flipCoin.bind(this)
        this.reduceState = this.reduceState.bind(this)
    }

    flipCoin() {
        // Generate a 0 or 1
        let flip = Math.floor(Math.random() * 2)
        let newTosses = [...this.state.tosses, flip]
        this.setState({ tosses: newTosses })
    }

    reduceState() {
        let flips = this.state.tosses.length
        let heads = this.state.tosses.filter(c => c === HEADS).length
        let tails = this.state.tosses.filter(c => c === TAILS).length
        let imageSrc = this.state.tosses[this.state.tosses.length - 1] === HEADS ? HEADS_SRC : TAILS_SRC
        return { flips, heads, tails, imageSrc }
    }

    render() {
        let viewState = this.reduceState()
        return (
            <div className="CoinGame">
                <h1>{this.props.header}</h1>
                { viewState.flips > 0 &&
                    <Coin imageSrc={viewState.imageSrc} />
                }
                <button className="Coin-button" onClick={this.flipCoin}>Flip</button>
                <p>Out of <strong>{viewState.flips}</strong> flips, there have been <strong>{viewState.heads}</strong> heads and <strong>{viewState.tails}</strong> tails</p>
            </div >
        )
    }
}

export default CoinGame