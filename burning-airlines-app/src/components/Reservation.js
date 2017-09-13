import React, { Component } from 'react';
import './Reservation.css'
import axios from 'axios';

// http://localhost:5000/flights.json
const SERVER_URL = "https://burning-airlines-server.herokuapp.com/flights.json";

function FlightTable (props) {
  let rows = [];
  for (let row = 0; row < props.plane.rows; row++) {
    let cols = [];
    for (let col = 0; col < props.plane.cols; col++) {
      cols.push(<td key={cols}></td>);
    }
    rows.push(<tr key={rows}>{cols}</tr>);
  }

  return (
    <tbody>
      {rows}
    </tbody>
  )
}


class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', flights: [{
      flightNum: 111,
      rows: 20,
      cols: 6
    }]};
    this._handleChange = this._handleChange.bind(this);

    const fetchFlight = () => {
      axios.get(SERVER_URL).then(function(results) {
        this.setState({flightNumber: results.data.text, name: this.state.name});
        console.log(this.state.flightNumber);
      }.bind(this));
    }

    fetchFlight();
  }

  _handleChange(e) {
    this.setState({ flightNumber: this.state.flightNumber, name: e.target.value });
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this._handleChange} />
        <p>{this.state.name}</p>
        <p>{this.state.flightNumber}</p>
        <FlightTable plane={this.state.flights[0]} />
      </div>
    );
  }

}

export default Reservation
