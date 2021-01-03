import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  constructor(props) {
    super(props)
    this.handleDoScore = this.handleDoScore.bind(this)
  }

  handleDoScore() {
    if (this.props.score === undefined) {
      // We don't already have a score assigned
      this.props.doScore()
    }
  }

  render() {
    const { score, name, description } = this.props;
    const styles = score === undefined ? "active" : "disabled"
    return (
      <tr className={`RuleRow RuleRow-${styles}`} onClick={this.handleDoScore}>
        <td className="RuleRow-name">{name}</td>
        { score === undefined &&
          <td className="RuleRow-description">{description}</td>
        }
        { score !== undefined &&
          <td className="RuleRow-score">{score}</td>
        }
      </tr>
    )
  }
}

export default RuleRow;