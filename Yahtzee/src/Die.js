import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";

import "./Die.css";
class Die extends Component {
  constructor(props) {
    super(props)

    this.handleToggleLock = this.handleToggleLock.bind(this)
  }

  handleToggleLock() {
    this.props.handleClick(this.props.idx)
  }

  icon() {
    switch (this.props.val) {
      case 1: return faDiceOne
      case 2: return faDiceTwo
      case 3: return faDiceThree
      case 4: return faDiceFour
      case 5: return faDiceFive
      case 6: return faDiceSix
    }
  }

  render() {
    const icon = this.icon()
    return (
      <div className="Die">
        <FontAwesomeIcon
          icon={icon}
          style={{ color: this.props.locked ? "grey" : "white", width: '70', height: '70' }}
          onClick={this.handleToggleLock}
        />
      </div>
    );
  }
}

export default Die;
