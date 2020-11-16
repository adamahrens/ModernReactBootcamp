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

Focus on minimizing State.

# Best Practices

