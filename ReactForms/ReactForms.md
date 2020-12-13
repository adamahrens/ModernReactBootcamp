# Forms in React

Forms tend to have some internal state. The data for all the input that's been entered. React has it's own state that's manipulated with `setState`  How do we want to use that state and update it with the internal state of a form. Use Controlled components. React then becomes the one source of truth. React will control what's shown and the values as they are updated. That's why they are controlled components.

Basically you hook up an `onChange` attribute and you set the values of the form to be the values in React state

```
class FullNameComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { fullName: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        // Stop page from refreshing
        event.preventDefault()

        console.log('form was submited')

        // Clear out previous value
        this.setState({fullName: '' })
    }

    handleChange(event) {
        this.setState({ fullName: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>Enter FullName</h1>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.fullName} onChange={this.handleChange}>
                <button>Confirm Full Name</button>
                </form>
            </div>
        )
    }
}
```

# Forms with Multiple Inputs

Want to reuse the name handleChange for the form. Need to use Javascript ES2015 Computed Property Names to try out change functions.


```
class UserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { username: '', email: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        // Stop page from refreshing
        event.preventDefault()

        console.log('form was submited')
        
        // Clear out previous value
        this.setState({username: '', email: '' })
    }

    handleChange(event) {
        //this.setState({ fullName: event.target.value})

        // The [] is the computed property where it uses that value
        // as the key
        // val name = 'Adam'
        { [name] : 34 } === { 'Adam' : 34 }
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        // Make sure your name attributes match the name in react state

        return (
            <div>
                <h1>Enter FullName</h1>
                <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}>
                <input type='text' placeholder='email' name='email' value={this.state.email} onChange={this.handleChange}>
                <button>Confirm User</button>
                </form>
            </div>
        )
    }
}

```

# HtmlFor attribute

When you have a label and an input. You usually use `for` attribute to associate the label with the input. In react you need to use `htmlFor`

# Design Pattern Passing Data Upward

How to pass data from a child component to a parent component on a form submission.

Define in the parent component the method that you will pass as props to the child component.

To duplicate an array and append use `items: [...state.items, item]`

# Use a UUID Library

When your data doesnt have a good id but you need to set keys on the react elements

`npm install uuid`
`import uuid from 'uuid/v4'`
`id: uuid()`