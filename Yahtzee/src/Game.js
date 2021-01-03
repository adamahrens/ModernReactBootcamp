import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.resetGame = this.resetGame.bind(this)
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1
    }));
  }

  toggleLocked(idx) {
    if (this.state.rollsLeft > 0) {
      let modifiedLock = this.state.locked.map((val, index) => {
        if (index == idx) {
          return !val
        } else {
          return val
        }
      })

      this.setState({ locked: modifiedLock })
    }
  }

  resetGame() {
    this.setState({
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    })
  }

  gamePlayable() {
    var playable = false
    const scores = this.state.scores
    for (var key in scores) {
      if (scores.hasOwnProperty(key) && scores[key] === undefined) {
        playable = true
      }
    }

    return playable
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.roll();
  }

  render() {
    const gamePlayable = this.gamePlayable()
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>
          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
            />
            <div className='Game-button-wrapper'>
              {gamePlayable &&
                <button
                  className='Game-reroll'
                  disabled={this.state.locked.every(x => x) || this.state.rollsLeft == 0}
                  onClick={this.roll}
                >
                  {this.state.rollsLeft} Rerolls Left
              </button>
              }

              {!gamePlayable &&
                <button
                  className='Game-reroll'
                  onClick={this.resetGame}
                >
                  Restart?
              </button>
              }
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
