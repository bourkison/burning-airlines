import React, { Component } from 'react';
import './App.css';
import Reservation from './Reservation';

import FlightsShow from './FlightsShow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Virgin Airlines</h1>
        <FlightsShow />
        <Reservation />
      </div>
    );
  }
}

export default App;
