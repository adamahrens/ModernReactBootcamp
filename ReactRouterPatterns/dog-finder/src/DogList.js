import React, { Component } from 'react'
import Dog from './Dog'

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">All the dogs</h1>
                <div className="container">
                    <div className="row">

                        {this.props.dogs.map(d => (
                            <div className="col-4">
                                <Dog key={d.name} name={d.name} age={d.age} imageSrc={d.src} facts={d.facts} showBack={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default DogList;