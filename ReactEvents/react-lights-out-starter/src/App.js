import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-container'>
          <div className="neon">Lights</div>
          <div className="flux">Out</div>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
