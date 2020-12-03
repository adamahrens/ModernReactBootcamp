import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.2
  };

  constructor(props) {
    super(props);

    this.createBoard = this.createBoard.bind(this)
    this.flipCellsAround = this.flipCellsAround.bind(this)

    // Init state
    this.state = { board: this.createBoard(), hasWon: false }
  }

  createBoard() {
    let board = Array.from({ length: this.props.nrows }, () =>
      Array.from({ length: this.props.ncols }, () =>
        Math.random() <= this.props.chanceLightStartsOn
      )
    )

    return board
  }

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let x = coord.x
    let y = coord.y

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // Flip this cell and the cells around it
    flipCell(y, x)
    flipCell(y + 1, x)
    flipCell(y - 1, x)
    flipCell(y, x + 1)
    flipCell(y, x - 1)

    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell))
    this.setState({ board, hasWon });
  }

  render() {
    // if the game is won, just show a winning msg & render nothing else
    if (this.state.hasWon) {
      return (
        <div>
          <div className="neon">You</div>
          <div className="flux">Won!</div>
        </div>
      )
    }

    // Otherwise show the board
    return (
      <div className="Board">
        <table>
          <tbody>
            {
              this.state.board.map((row, i) =>
                <tr key={i}>
                  {
                    this.state.board.map((col, j) => <Cell key={`${i}-${j}`} coordinates={{ x: j, y: i }} isLit={this.state.board[i][j]} flipCellsAroundMe={this.flipCellsAround} />)
                  }
                </tr>
              )
            }
          </tbody>
        </table>
      </div >
    )
  }
}

export default Board;
