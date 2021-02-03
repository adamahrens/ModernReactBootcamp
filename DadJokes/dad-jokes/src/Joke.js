import React, { Component } from 'react'
import './Joke.css';

class Joke extends Component {

    constructor(props) {
        super(props)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.getColor = this.getColor.bind(this)
    }

    getColor() {
        const c1 = "#4CAF50"
        const c2 = "#8BC34A"
        const c3 = "#CDDC39"
        const c4 = "#FFEB3B"
        const c5 = "#FFC107"
        const c6 = "#FF9800"
        const c7 = "#F44336"

        if (this.props.votes >= 15) {
            return c1
        } else if (this.props.votes >= 12) {
            return c2
        } else if (this.props.votes >= 9) {
            return c3
        } else if (this.props.votes >= 6) {
            return c4
        } else if (this.props.votes >= 3) {
            return c5
        } else if (this.props.votes >= 0) {
            return c6
        } else {
            return c7
        }
    }

    increment() {
        this.props.vote(this.props.id, 1)
    }

    decrement() {
        this.props.vote(this.props.id, -1)
    }

    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow-up" onClick={this.increment} />
                    <span style={{ borderColor: this.getColor() }}>{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={this.decrement} />
                </div>
                <div className="Joke-text">
                    {this.props.joke}
                </div>
            </div>
        )
    }
}

export default Joke;