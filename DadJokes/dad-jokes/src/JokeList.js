import React, { Component } from 'react'
import Joke from './Joke'
import './JokeList.css';
import axios from 'axios'

class JokeList extends Component {

    static defaultProps = { numberOfJokes: 10 }

    constructor(props) {
        super(props)
        this.state = { jokes: [], loading: true }
        this.fetchJokes = this.fetchJokes.bind(this)
        this.fetchMoreJokes = this.fetchMoreJokes.bind(this)
        this.vote = this.vote.bind(this)
    }

    componentDidMount() {
        this.fetchJokes()
    }

    async fetchJokes() {
        let jokes = this.state.jokes
        let index = 0
        while (index < this.props.numberOfJokes) {
            // Fetch joke
            let response = await axios.get('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
            let joke = { joke: response.data.joke, id: response.data.id, votes: 0 }

            // Ensure unique
            const foundJoke = (element) => element.id === joke.id;
            let found = jokes.findIndex(foundJoke);

            // append to list
            if (found === -1) {
                jokes.push(joke)
                index += 1
            }
        }

        this.setState({ jokes, loading: false })
    }

    fetchMoreJokes() {
        this.setState({ loading: true }, this.fetchJokes)
    }

    // delta will be a +1 or -1
    vote(id, delta) {
        this.setState(prevState => ({
            // Find the id we want to change, spread previous update. Update  votes
            jokes: prevState.jokes.map(j => j.id === id ? { ...j, votes: j.votes + delta } : j)
        }))
    }

    render() {
        if (this.state.loading) {
            return (<div className="JokeList-spinner">
                <i className="far fa-8x fa-laugh fa-spin" />
                <h1 className="JokeList-title">Loading</h1>
            </div>
            )
        }

        let sortedJokes = this.state.jokes.sort((first, second) => second.votes - first.votes)

        return (
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
                    <h4 className="JokeList-votes">{this.state.jokes.length}</h4>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='Smiley Face' />
                    <button className="JokeList-getMore" onClick={this.fetchMoreJokes}>More Jokes</button>
                </div>
                <div className="JokeList-jokes">
                    {sortedJokes.map(j => (
                        <Joke key={j.id} id={j.id} joke={j.joke} votes={j.votes} vote={this.vote} />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;