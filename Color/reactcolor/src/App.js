import Palette from './Palette'
import PaletteList from './PaletteList'
import seedColors from './seedColors'
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import React from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id) {
    return seedColors.find(function (p) {
      return p.id === id;
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
    );
  }
}

export default App;
