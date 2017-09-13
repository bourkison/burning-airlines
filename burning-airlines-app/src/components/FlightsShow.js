import React, {Component} from 'react';
import Reservation from './Reservation';
import axios from 'axios';

const SERVER_URL = 'https://burning-airlines-server.herokuapp.com/flights.json';

function AllFlights(props) {
  let rows = [];
  for (let row = 0; row < props.flights.length; row++) {
    let cols = [];
    for (let col = 0; col < 4; col++) {
      if (col === 0) {
        cols.push(<td>{props.flights[row].date}</td>);
      } else if (col === 1) {
        cols.push(<td>{props.flights[row].flight_number}</td>);
      } else if (col === 2) {
<<<<<<< HEAD
        cols.push(<td> {props.flights[row].from} {props.flights[row].to}</td>);
=======
        let s = `${props.flights[row].from} to ${props.flights[row].to}`
        cols.push(<td>{s}</td>);
>>>>>>> e9534fc15289a61cf7762cbb164d1af4e478ded3
      } else if (col === 3) {
        cols.push(<td>{props.flights[row].airplane_id}</td>);
      }
    }//col let
    console.log(rows);
    rows.push(<tr key={rows}>{cols}</tr>)
  }

  return (
    <table className="flightsShow">
      <tr>
        <td>Date</td>
        <td>Flight</td>
        <td>From > To</td>
        <td>Plane</td>
      </tr>
      {rows}
    </table>
  );


}

class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {flights: [], clickedFlight: 0};

    const fetchFlights = () => {
      axios.get(SERVER_URL).then(function(results) {
        this.setState({flights: results.data});
        console.log(this.state.flights);
      }.bind(this));
    }
    fetchFlights();
  }



  render() {
    return (
      <div>
        <AllFlights flights={this.state.flights} />
        <Reservation flightId={this.state.clickedFlight} />
      </div>
    )
  }
}



class FlightsShow extends Component {
  render () {
    return (
      <div>
        <Flights />
      </div>
    );
  }
}

export default FlightsShow;
