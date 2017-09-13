import React, {Component} from 'react';
import Reservation from './Reservation';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/flights.json';

class FlightsInfo extends Component {
  constructor(props){
    super(props);
    this.state = {flights: []};

    const fetchFlights = () => {
      axios.get(SERVER_URL).then(function(results) {
        console.log(results);
        this.setState({flights: results.data});
      }.bind(this));
    }
    fetchFlights();
  }

  render() {
    return (
      <div>
        <table>
        <tr>
          <td>Date</td>
          <td>Flight</td>
          <td>From > To</td>
          <td>Plane</td>
        </tr>
      </table>
      </div>
    )
  }
}

class FlightsShow extends Component {
  render () {
    return (
      <div>
        <h2>Flight Search Results</h2>
        <FlightsInfo />
        <Reservation />
      </div>
    );
  }
}

export default FlightsShow;
