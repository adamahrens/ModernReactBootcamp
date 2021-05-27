import React from 'react';
import './Palette.css'

const Footer = (props) => {
    return (
        <footer className="Palette-footer">
            {props.paletteName}
            <span className="emoji">{props.emoji}</span>
        </footer>
    )
}

export default Footer;