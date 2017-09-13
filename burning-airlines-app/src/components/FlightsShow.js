import React, {Component} from 'react';
import Reservation from './Reservation'
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json';

function AllFlights(props) {
  let rows = [];
  for (let row = 0; row < props.flights.length; row++) {
    let cols = [];
    for (let col = 0; col <= 4; col++) {
      if (col === 0) {
        cols.push(<td>{props.flights[row].date}</td>);
      } else if (col === 1) {
        cols.push(<td>{props.flights[row].flight_number}</td>);
      } else if (col === 2) {
        cols.push(<td>{props.flights[row].from} > {props.flights[row].to}</td>);
      }
      else {
        cols.push(<td>{props.flights[row].airplane_id}</td>);
      }
    }
    rows.push(<tr key={rows}>{cols}</tr>)
  }

  return (
    <table>
      <tr>
        <td>Date</td>
        <td>Flight</td>
        <td>From > To</td>
        <td>Plane</td>
      </tr>
      {rows}
    </table>
  )


}

class Flights extends Component {
  constructor(props){
    super(props);
    this.state = {flights: []};

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
      <AllFlights flights={this.state.flights} />
    )
  }
}



class FlightsShow extends Component {
  render () {
    return (
      <div>
        <Flights />
        <Reservation />
      </div>
    );
  }
}

export default FlightsShow;
