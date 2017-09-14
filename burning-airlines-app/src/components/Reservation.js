import React, { Component } from 'react';
import './Reservation.css'
import axios from 'axios';

// http://localhost:5000/flights.json
const SERVER_URL = "https://burning-airlines-server.herokuapp.com/flights.json";
let selectedSeat = 0;

function FlightTable (props) {
  let rows = [];
  for (let row = 0; row < props.plane.rows; row++) {
    let cols = [];
    for (let col = 0; col < props.plane.cols; col++) {
      let rowS = row > 9 ? "" + row : "0" + row;
      let colS = col > 9 ? "" + col : "0" + col;
      let key = rowS + colS
      cols.push(<td className="reservationTable" key={key} onClick={randFunc} id={key}></td>);
    }
    rows.push(<tr key={rows}>{cols}</tr>);
  }

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

function randFunc(e) {
  if (selectedSeat != 0) {
    selectedSeat.classList.remove('selected');
  }
  selectedSeat = e.target;
  e.target.classList.add('selected');
}

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', flight: {}, searchId: 0};
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleIdChange = this._handleIdChange.bind(this);
  }

  fetchPlane(id) {
    document.getElementsByClassName("hidden")[0].classList.remove('hidden');
    let url = `https://burning-airlines-server.herokuapp.com/airplanes/${id}.json`;
    axios.get(url).then(function(results) {
      this.setState({name: this.state.name, flight: results.data, searchId: this.state.searchId});
      console.log("********************");
      console.log(this.state.flight);
    }.bind(this));
  }

  _handleNameChange(e) {
    this.setState({ flight: this.state.flight, name: e.target.value, searchId: this.state.searchId });
    console.log(this.state);
  }

  _handleIdChange(e) {
    this.setState({ flight: this.state.flight, name: this.state.name, searchId: e.target.value})
  }

  render() {
    return (
      <div>
        <input type="number" value={this.state.id} onChange={this._handleIdChange} />
        <input type="button" value="Get Plane Layout" onClick={() => this.fetchPlane(this.state.searchId)}/>
        <form className="hidden">
          <FlightTable plane={this.state.flight} />
          <input type="text" value={this.state.name} onChange={this._handleNameChange} />
          <input type="submit" value="Book Flight" />
        </form>
      </div>
    );
  }

}

export default Reservation
