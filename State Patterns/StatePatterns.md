# React Patterns

Update state with existing values in state. setState is async. React will batch calls to setState.
Use the callback form if your setState depends on the current state.

```
 this.state =  { score: 0 };
 this.setState(currentState => ( { score: currentState.score + 1}));
```

Allows us to use functions to abstract state updates

```
function incrementScore(oldState) {
    return { score: oldState.score + 1};
}

this.setState(incrementScore);
```

# Mutable State Data Structures

```
this.state = {
    todos: [
        { task: 'Clean house', done: false, id: 1 },
        { task: 'Walk the dog', done: false, id: 2 }
    ]
}

function completeTodo(id) {
    const newTodos = this.state.todos.map( todo => {
        if (todo.id === id) {
            // Update the property you want to change
            return { ...todo, done: true}
        }

        return todo
    })

    this.setState({todos: newTodos})
}

```

A better way is to make a copy of the data structure, update it, and reset it. Use pure functions `map reduce filter` and the spread `...` operator 

# Design State

## Minimize State
Focus on minimizing State. If a variable `x` is going to change. It should be state. Otherwise use props.

Example model a `Person`. Lets say `first` and `last` don't change. So use them in props. If they had a `mood` that would arguably be a `state` since it could change.

## State should live in Parent

Support downward data flow. Parent manages state and renders dumb child components. Debugging is easier because the state is centralized.


# Best Practices

