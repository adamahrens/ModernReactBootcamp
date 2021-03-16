import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import DogList from './DogList'
import Dog from './Dog'
import Calculator from './Calculator'

class Routes extends Component {
    render() {
        const fetchDog = props => {
            let name = props.match.params.name;
            let dog = this.props.dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
            return <Dog {...props} key={dog.name} name={dog.name} age={dog.age} imageSrc={dog.src} facts={dog.facts} showBack={true} />
        }

        return (
            <Switch>
                <Route exact path='/dogs' render={() => <DogList key='doglist' dogs={this.props.dogs} />} />
                <Route exact path='/dogs/:name' render={fetchDog} />
                <Route path='/:operation/:first/:second' render={(props) => <Calculator {...props} />} />
                <Redirect to='/dogs' />
            </Switch>
        )
    }
}

export default Routes;