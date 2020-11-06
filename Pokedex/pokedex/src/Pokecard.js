import React, { Component } from 'react';

// const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKEMON_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {

    render() {
        let paddedId = pad(this.props.id)
        let imgSrc = `${POKEMON_API}${paddedId}.png`
        return (<div className='pokemon'>
            <h1>{this.props.name}</h1>
            <img src={imgSrc} />
            <p>Type: {this.props.type}</p>
            <p>Experience: {this.props.experience}</p>
        </div>)
    }
}

// Pad numbers to display as 3 digits always
let pad = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default Pokecard;