# Intro to ComponentDidMount

Methods that allow a developer to plug into a Component. Three stages. mounting, updating, unmounting. React calls the `constructor` then calls `render` then calls `componentDidMount`

Mounting is the first time the component is rendered in the DOM. Great place to load data, timers, subscriptions, etc. Calling `setState` will cause `render` to be called again. It will only run once.

# Loading Data with AJAX

`npm install axios`

```
import axios from 'axios';

class ZenQuote extends Component {
    constructor(props) {
        super(props)
        this.state = { quote: null }
    }

    componentDidMount() {
        // Be sure to set initial state! 
        // render will still be called once before componentDidMount is called
        axios.get('https://api.githbu.com/zen).then(response =>{
            this.setState({quote: response.data})
        })
    }

    async componentDidMount() {
        const url = "https://api.github.com/users/adamahrens"
        let response = await axios.get(url)
        let data = response.data
    }

    render() {
       return  <div>{this.state.quote}</div>
    }
}
```

# ComponentDidUpdate

Things that can trigger a change, new props (parent component has new values), setState, forceUpdate. Good place to sync up with local storage (such as new todos), updating DOM with uncontrolled components.

Did update is called after a render

We have access to previousProps and previousState

```
componentDidUpdate(prevProps, prevState) {
    
}
```