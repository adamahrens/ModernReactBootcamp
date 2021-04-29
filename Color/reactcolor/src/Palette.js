import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar'

class Palette extends Component {
    constructor(props) {
        super(props)

        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        console.log(level);
        this.setState({ level });
    }

    changeFormat(val) {
        this.setState({ format: val })
    }

    render() {
        const { level, format } = this.state
        const { paletteName, emoji } = this.props.palette

        console.log(this.props.palette.colors)

        const colorBoxes = this.props.palette.colors[level].map(c => (
            <ColorBox key={c.id} background={c[format]} name={c.name} />
        ))

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />

                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette;