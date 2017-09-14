import React, { Component } from 'react';
import './Reservation.css'
import axios from 'axios';

// http://localhost:5000/flights.json
const SERVER_URL = "https://burning-airlines-server.herokuapp.com/flights.json";
const NEW_USER_URL = "https://burning-airlines-server.herokuapp.com/users.json"
const RESERVATION_URL = "https://burning-airlines-server.herokuapp.com/reservations.json"
let selectedSeat = 0;
let bookedSeats = [];

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

  axios.get(RESERVATION_URL).then(function(result) {
    bookedSeats = [];
    console.log(result);
    console.log("Props", props);
    for(let i = 0; i < result.data.length; i++) {
      if (result.data[i].flight_id === props.plane.id) {
        console.log("MATCH");
        bookedSeats.push(result.data[i]);
        console.log("Booked seats in loop", bookedSeats);
      }
    }
    console.log("Booked Seats", bookedSeats);
    for (let i = 0; i < bookedSeats.length; i++) {
      if(bookedSeats[i].seatnumber != null) {
        console.log(bookedSeats[i]);

        let id = bookedSeats[i].seatnumber.toString();
        if (id.length < 2) {
          id = "000" + id;
        }
        else if (id.length < 4) {
          id = "0" + id;
        }
        if (document.getElementById(id) !== null) {
          document.getElementById(id).classList.add('booked');
        }
      }
    }
  });

  return (

  <table>
    <tbody>
      {rows}
    </tbody>
  </table>
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
    this._bookSeat = this._bookSeat.bind(this);
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

  _bookSeat(e) {
    e.preventDefault();
    let email = `${this.state.name}@gmail.com`
    axios.post(NEW_USER_URL, {user: {name: this.state.name, username: email, password: 'chicken', password_confirmation: 'chicken'}}).then(function(result) {
      axios.post(RESERVATION_URL, {reservation: {user_id: result.data.id, flight_id: this.state.flight.id, seatnumber: selectedSeat.id}}).then(function(data) {
        console.log("Successfully created user and reservation.");
      }.bind(this));
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
      <div className="input">
        <div className="layout">
          <input type="number" value={this.state.id} onChange={this._handleIdChange} />
          <input type="button" value="Get Plane Layout" onClick={() => this.fetchPlane(this.state.searchId)}/>
        </div>
        <form className="hidden" onSubmit={this._bookSeat}>
          <FlightTable plane={this.state.flight} />
          <div className="book-flight">
            <input type="text" value={this.state.name} onChange={this._handleNameChange} />
            <input type="submit" value="Book Flight" />
          </div>
        </form>
      </div>
    );
  }
}


export default Reservation
