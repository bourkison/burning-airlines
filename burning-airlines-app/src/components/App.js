import React, { Component } from 'react';
import './App.css';
import FlightsShow from './FlightsShow';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="nav">
      <ul>
      <li><a href="#">Planes</a></li>
      <li><a href="#">Flights</a></li>
      <li><a href="#">Mina</a></li>
      </ul>
      </nav>
        <h1>Virgin Airlines</h1>
        <FlightsShow />
      </div>

    );
  }
}

export default App;
