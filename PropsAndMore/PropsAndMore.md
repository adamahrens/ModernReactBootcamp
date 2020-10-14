# Props

Use to configure components, pass properties to the component for use inside the component. It's how you pass data from a parent to a child. Props are passed in the declartion of the component

```
<Hello name="Adam" greeting="Hello there!" />
```

# Props Requirements

Props are for configuring the component. Properties are immutable. Trying to assign to a prop throws an exception since it's read-only

# Prop Types

Can pass arrays, booleans, objects. For example

```
<Hello name="Bruce" greeting="Good Day Sir!" address={{ "street": "4420 F St", "city": "Amana", "state": "IA" }} />
```

# Looping in JSX

Most common way is to use map to output loops in JSX

```
 <ul>
    { msgs.map( m => <li> {m.text}</li>)}
 </ul>
```

# Set default value for Props

All you do is define a `defaultProps` object at the top of the component

```
class Hello extends React.Component {
    static defaultProps = {
        from: "Jane Doe"
    }
}
```

# Styling

Can just specify `style={{ color: 'white' }}` inline. Otherwise use `className` to use a class that's in your css file