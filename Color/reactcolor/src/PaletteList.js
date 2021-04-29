import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        const things = palettes.map(p => (
            <Link to={`/palette/${p.id}`}>
                <p>
                    {p.paletteName}
                </p>
            </Link>
        ))
        return (
            <div>
                <h1>React Color</h1>
                {things}
            </div>
        )
    }
}

export default PaletteList;