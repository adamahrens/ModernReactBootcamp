import React, { Component } from 'react';
import ColorBox from "./ColorBox"
import './Palette.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

class SingleColorPalette extends Component {
    constructor(props) {
        super(props)

        this.gatherShades = this.gatherShades.bind(this)
        this.changeFormat = this.changeFormat.bind(this);
        this.state = { shades: this.gatherShades(), format: "hex" }
    }

    // Return all the shades of a given color
    gatherShades() {
        const { palette, colorId } = this.props
        let shades = []
        let allColors = palette.colors
        for (let key in allColors) {
            shades = shades.concat(allColors[key].filter(color => color.id === colorId))
        }

        return shades.slice(1)
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { format } = this.state
        const { palette } = this.props
        const colorBoxes = this.state.shades.map(c => (
            <ColorBox key={c.name} showMore={false} paletteId={palette.id} colorId={c.id} background={c[format]} name={c.name} />
        ))

        return (
            <div className="SingleColorPalette Palette">
                <Navbar showLevel={false} handleChange={this.changeFormat} />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${palette.id}`} className='back-button'>Go Back</Link>
                    </div>
                </div>
                <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}

export default SingleColorPalette