# React Events

How to attach events, mouse up/down, copy/paste, onClick, etc. How to pass event handlers as props to child components.

## React Events

`onClick onMouseOver onSubmit onKeyDown onCopy`

You attach as an attribute on a component and give it a function to execute. `<div onSubmit={this.handleSubmit} />`
You can inspect the event passed to the form. Common examples are inspecting the `keyCode` to see if it's the enter button.

## Method Binding

Without binding we lose the context of `this` which in most cases is the component. So if you're trying to access `props` it won't work.
Accessing `this` will be undefined.

### How to Bind

1. Use bind inline
2. Use arrow function
3. Method bind in the `constructor` of the component.

Bind inline. It's explicit. However, if you're passing the same function to multiple components then you constantly have to bind. A new function is created in `render` when we bind. Resulting in making new functions.

```
onClick={this.handleClick.bind(this)}
```

Use arrow function inline. Dont have to use bind directly but obfuscates what is happening. Still creates a new function if called in the `render`

```
onClick={() => this.handleClick)}
```

In the constructor

```
this.handleClick = this.handleClick.bind(this)
```

## Alternative Binding with class properties

Considered experimental.

```
class LoginButton extends Component {
    handleClick = () => {
        console.log('this is ...', this);
    }
}
```

## Method Binding with Arguments

How do we handle passing arguments to an event handler? Lets say we're passing a color value when clicking a button.

Can't do something like `onClick={this.changeColor(c)}` this will immediately execute. Can use bind though `onClick={this.changeColor.bind(this, c)}`

However, that is a bind in render which would create a new function when render is called again with setState

## Passing function to child components

Basica idea is child components aren't stateful but need to tell parent component to change. So we need to send data "back up"

1. Parent component defines a function
2. The function is passed to the child component as a `prop`
3. The child component invokes the `prop`
4. That calls the function in the parent and the parent `state` is updated. Causing the `child` to rendered again.

However, there is still a downside to this as the render will produce numerous functions. We can use a single bound function instead by binding in the `constructor`. However, the child component needs to pass a value to the function. Just binding the `onClick` passes an event. Just create another function in the child that invokes the parent

```
c

```