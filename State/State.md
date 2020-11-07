# React State

State to make a web app dynamic. Keep track of changing data. Logged in vs Logged out for example. Expand or Collapse a section.
Thinking about a game of Chess as State we have to track each move. Then the board is updated.

Great for storing `UI Logic` and `Business Logic` 

# Initializing State

State is data that'll change over time. Otherwise best used as props (immutable). State is a POJO that just stores key/value pairs.

Can just access `this.state` in a Component. Always initalize state as soon as a component is created.

```
class ClickCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numClicks: 0
        };
    }
}
```

Stateless function can omit the `constructor` function. However, you can't use a stateless component and state at the same time.

Alternate Syntax to init state in a component. Need to use Babel however. Babel will convert it to supported Javascript. Class Properties Proposal.
Can use it if we use `create-react-app` as the babel plugin is enabled.

```
class ClickCount extends Component {
    state = {
        numClicks: 0
    };

    render() {
        return (<div><h1>Boom</h1></div>)
    }
}
```

# super() vs super(props)

Calling `super(props)` registers your class as a React Component. You have to call `super(props)` in order to be  able to have access to `this.props` throughout your component.

# Updating State

Never use `this.state.score = 0`. Use the `this.setState()` call to update the state. Example `this.setState({ score: 1})`. Can't call `setState` on a component that isn't mounted. Therefore it can be called in the `constructor`

Antipattern to NOT use `setState` in `render`. Set state will only change the values of the keys passed in. It won't override or clear out other key value pairs. Set state is an async call. React determines the best time to update it which forces a component to be rendered again.

The other way to call it is with a function `this.setState((state, props) => { return { counter: state.counter + props.step }});` Can also pass a callback function once setState has ran.

# React Events

Pass in a `onClick={}` function on any element. Make sure to bind `this` in constructor. Need to set the context

```
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
    this.setState({ clicked: true});
}

<button onClick={this.handleClick}>ClickMe!</button>
```

Can also use the babel syntax that translates the binding

```
handleClick = (e) => {
    this.setState({ clicked: true});
}
```
