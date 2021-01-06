import React from 'react'
import './Card.css'

// transform: translate(10px, 20px) rotate(20deg);
// let angle = Math.random() * 90 - 45
// let x = Math.random() * 40 - 20
// let y = Math.random() * 40 - 20
// let transfrom = `translate(${x}px, ${y}px) rotate(${angle}deg)
const Card = ({ image, suit, value, transform }) => {
    return (<img style={{ transform: transform }} className='Card' src={image} alt={`${value} of ${suit}`} />)
};

export default Card;