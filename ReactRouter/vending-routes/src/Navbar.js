import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                    <NavLink exact activeClassName='active' to='/skittles'>Skittles</NavLink>
                    <NavLink exact activeClassName='active' to='/drpepper'>DrPepper</NavLink>
                    <NavLink exact activeClassName='active' to='/reeses'>Reeses</NavLink>
                </nav>
            </div>
        )
    }
}