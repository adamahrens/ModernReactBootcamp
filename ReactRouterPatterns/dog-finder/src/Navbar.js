import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className='navbar-brand' to='/dogs'>DogFinder</Link>

                <ul className='navbar-nav'>
                    {this.props.dogs.map(d => (
                        <li key={d} className='nav-item'>
                            <NavLink className='nav-link' to={`/dogs/${d}`}>{d}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Navbar;