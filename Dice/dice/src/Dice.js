import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props)

        this.diceName = this.diceName.bind(this)
    }

    diceName() {
        switch (this.props.number) {
            case "1": return "fa-dice-one"
            case "2": return "fa-dice-two"
            case "3": return "fa-dice-three"
            case "4": return "fa-dice-four"
            case "5": return "fa-dice-five"
            case "6": return "fa-dice-six"
        }
    }

    render() {
        let correctDiceName = this.diceName()
        let icon = `fas ${correctDiceName} fa-10x`
        let containerClass = this.props.rolling ? "Dice wiggling" : "Dice"
        return (
            <div className={containerClass} >
                <i className={icon}></i>
            </div >
        )
    }
}

export default Dice;