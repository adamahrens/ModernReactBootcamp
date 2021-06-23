# React Hooks

New feature for React Components. Hooks allow you to hook into internal works of React. Makes for shorter components that are also reusable.
Allow you to write functional component that have the feature of a class based component.

`useState` is built in hook.

Lets say we wanted a `Counter` component, here is how we could use it with hooks

```
import React, {useState} from "react"

function CounterHooks() {
    // useState is a function, returns a piece of state and a function to update that state
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default CounterHooks;
```

It aims to simplify things, no need to bind in constructors. Don't have to go through `this.state` or use `this.setState({})`

# Building Custom hooks

We can now share stateful logic between components. Lets say we're toggling things. Example of a toggle state across multiple components. We use hooks to make forms easier to deal with.

```
import {useState} from "react"

// Make a generic toggle function
function useToggle(initial = false) {
    const[state, setState] = useState(initial)
    const toggle = () => {
        setState(!state)
    }

    // notice we're return the function to toggle
    // not the setState from useState. Encapsulation
    return [state, toggle]
}

export default useToggle;

import React, {useState} from "react"
import useToggle from "./useToggle"

function Toggler() {
    const [isOn, toggleIsOn] = useToggle(false)
    const [isHappy, toggleIsHappy] = useToggle(true) 

    return (
        <div>
            <h1 onClick={toggleIsOn}>{isOn ? "On" : "Off"}</h1>
            <h1 onClick={toggleIsHappy}>{isHappy ? "Happy" : "Sad"}</h1>
        </div>
    )
}

export default Toggler;
```

Using forms and making it simpler

```
import {useState} from "react"

// Generic Form Input hooks
export default initialValue => {
    const [value, setValue] = useState(initialValue)
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue(")
    }

    return [value, handleChange, reset]
}


import React from "react"
import useInputState from "./useInputState

export default FormHooks() {
    const[email, setEmail, resetEmail] = useInputState("")

    return (
        <div>
            <h1>Current {email}</h1>
            <input type="text" value={email} onChange={setEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}
```

# useEffect Hook

If we have a functional component we don't get componentDidMount or componentDidUpdate. In the past you could use the `setState`  function with a callback if you wanted to preform side effects but that wouldn't work with the `useState`. `useEffect` will run on initial render and future rerenders

# fetching data with useEffect

```
import React, { useState, useEffect } from "react";
import axios from "axios";

function StarWarsMovies() {
    const [number, setNumber] = useState(1)
    useEffect(() => {
        async function fetchMovie() {
            const response = await axios.get(`https://swapi.co/api/films/${number}/`);
            console.log(response)
        }
        
       fetchMovie();
    });

    return (
        <div>
            <h1>Select Movie</h1>
            <h4>Current selection is {number}</h4>
            <select value={number} onChange={ e => setNumber(e.target.value) }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    )
}

export default StarWarsMovies;
```