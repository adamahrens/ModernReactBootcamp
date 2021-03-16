import React, { Component } from 'react'

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.computeResult = this.computeResult.bind(this)
    }

    computeResult() {
        let first = parseInt(this.props.match.params.first, 10)
        let second = parseInt(this.props.match.params.second, 10)
        let operation = this.props.match.params.operation.toLowerCase()
        console.log(`${first} ${second} ${operation}`)
        console.log(`${first * second}`)

        let result = ""

        switch (operation) {
            case 'add': result = `${first + second}`; break;
            case 'subtract': result = `${first - second}`; break;
            case 'multiply': result = `${first * second}`; break;
            case 'divide': result = `${first / second}`; break;
        }

        return (
            <div>
                <h3>{first} {operation} {second} is</h3>
                <h4>{result}</h4>
            </div>
        )
    }

    render() {
        let result = this.computeResult()
        return (
            <div>
                <h1>Calculator Results</h1>
                { result}
            </div>
        )
    }
}

export default Calculator;