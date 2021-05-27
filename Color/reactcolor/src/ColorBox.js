import React, { Component } from 'react';
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

class ColorBox extends Component {
    constructor(props) {
        super(props)

        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }
    render() {
        const { name, background, colorId, paletteId, showMore } = this.props
        let overlayClassName = this.state.copied ? "copy-overlay show" : "copy-overlay"
        let overlayMessageClassName = this.state.copied ? "copy-message show" : "copy-message"
        const luminance = chroma(background).luminance()
        const isDark = luminance <= 0.06
        console.log(luminance)

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColorBox">
                    <div style={{ background }} className={overlayClassName}>
                    </div>
                    <div className={overlayMessageClassName}>
                        <h1>COPIED!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDark ? "light-text" : ""}>{name}</span>
                        </div>
                        <button className="copy-button">
                            Copy
                        </button>
                    </div>

                    {showMore &&
                        (<Link to={`/palette/${paletteId}/${colorId}`} onClick={event => event.stopPropagation()}>
                            <span className="see-more">MORE</span>
                        </Link>)
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;