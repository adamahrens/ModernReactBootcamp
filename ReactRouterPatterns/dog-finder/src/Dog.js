import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Dog extends Component {
    render() {
        let imageSizing = this.props.showBack ? 'w-25 h-25 img-thumbnail rounded-circle' : 'img-thumbnail rounded-circle'
        return (
            <div className="DogList text-center">
                <img className={imageSizing} src={this.props.imageSrc} alt={this.props.name}></img>
                <h1>{this.props.name}</h1>
                <h4>Age {this.props.age}</h4>
                <ul className="list-group">
                    {this.props.facts.map(f => (
                        <li className="list-group-item">{f}</li>
                    ))}
                </ul>
                { this.props.showBack && <Link className='btn btn-info mt-3' to='/dogs'>Go Back</Link>}
                { !this.props.showBack && <Link className='btn btn-info mt-3' to={`/dogs/${this.props.name}`}>Show</Link>}
            </div>
        )
    }
}

export default Dog;