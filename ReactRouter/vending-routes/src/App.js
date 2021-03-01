import './App.css';
import VendingMachine from './VendingMachine'
import Snack from './Snack'
import DrPepper from './DrPepper'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={VendingMachine} />
        <Route exact path='/drpepper' component={DrPepper} />
        <Route exact path='/reeses'><Snack snack='reeses' /></Route>
        <Route exact path='/skittles' render={() => <Snack snack='skittles' />} />
      </Switch>
    </div>
  );
}

export default App;
