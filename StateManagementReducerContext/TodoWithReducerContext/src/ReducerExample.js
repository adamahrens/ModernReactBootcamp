import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button'

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

/*
    Action can be whatever you want. Convention is to call it type
*/
function countReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.amount }
        case "DECREMENT":
            return { count: state.count - action.amount }
        case "RESET":
            return { count: 0 }
        default:
            return state
    }
}

function ReducerExample() {
    // Traditionally you call it dispatch
    const [state, dispatch] = useReducer(countReducer, { count: 0 })
    return (
        <div>
            <h1>{state.count}</h1>
            <div>
                <Button style={{ "margin": "10px" }} variant="contained" color="primary" onClick={() => dispatch({ type: INCREMENT, amount: 1 })}>Add 1</Button>
                <Button style={{ "margin": "10px" }} variant="contained" color="primary" onClick={() => dispatch({ type: INCREMENT, amount: 5 })}>Add 5</Button>
                <Button style={{ "margin": "10px" }} variant="contained" color="secondary" onClick={() => dispatch({ type: DECREMENT, amount: 1 })}>Subtract 1</Button>
                <Button style={{ "margin": "10px" }} variant="contained" color="default" onClick={() => dispatch({ type: RESET })}>Reset</Button>
            </div>
        </div>
    )
}

export default ReducerExample;