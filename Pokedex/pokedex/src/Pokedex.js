import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {

    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', experience: 72 }
        ]
    }

    render() {
        return (<div>
            <h1>Pokedex</h1>
            <div className='pokedex'>
                {this.props.pokemon.map(p =>
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} experience={p.experience} image="" />
                )}
            </div>
        </div>)
    }
}

export default Pokedex;