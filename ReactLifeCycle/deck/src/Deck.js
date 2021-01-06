import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'

const DECK_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {

    constructor(props) {
        super(props)
        this.state = { deck: null, cards: [] }
        this.fetchCard = this.fetchCard.bind(this)
    }

    componentDidMount() {
        fetch(`${DECK_BASE_URL}/new/shuffle`, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).then(data => data.json())
            .then(deck => {
                this.setState({ deck })
            })
    }

    generateRandomCardTransform() {
        let angle = Math.random() * 90 - 45
        let x = Math.random() * 40 - 20
        let y = Math.random() * 40 - 20
        return `translate(${x}px, ${y}px) rotate(${angle}deg)`
    }

    async fetchCard() {
        let url = `${DECK_BASE_URL}/${this.state.deck.deck_id}/draw/`
        let response = await axios(url)
        let { cards, remaining } = response.data
        let { image, suit, value, code } = cards[0]
        let transform = this.generateRandomCardTransform()
        this.setState(prevState => ({
            cards: [...prevState.cards, { image, suit, value, code, transform }],
            deck: { ...prevState.deck, remaining }
        }))
    }
    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                {this.state.deck && <h5>Remaining Cards: {this.state.deck.remaining}</h5>}
                {this.state.deck && this.state.deck.remaining > 0 && <button onClick={this.fetchCard}>
                    Draw Card
                </button>}
                <div className='Card-container'>
                    {this.state.cards.map(card =>
                        <Card key={card.code} image={card.image} suit={card.suit} value={card.value} transform={card.transform} />
                    )}
                </div>
            </div>
        )
    }
}

export default Deck