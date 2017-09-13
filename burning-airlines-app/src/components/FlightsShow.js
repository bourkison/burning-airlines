import React, {Component} from 'react';
import Reservation from './Reservation';


class FlightDate extends Component {
  constructor(props){
    super(props);
    this.state = {content: ''};
  }

  render() {
    return (
      <h2>
        Flight date coming soon...
      </h2>
    )
  }
}
class FlightNumber extends Component {
  render() {
    return (
      <h2>
        Flight number coming soon...
      </h2>
    )
  }
}
class FlightFromTo extends Component {
  render() {
    return (
      <h2>
        Flight from to coming soon...
      </h2>
    )
  }
}

class FlightPlane extends Component {
  render() {
    return (
      <h2>
        Flight plane coming soon...
      </h2>
    )
  }
}

class FlightsShow extends Component {
  render () {
    return (
      <div>
        <h2>Flight Search Results</h2>
        <FlightDate />
        <FlightNumber />
        <FlightFromTo />
        <FlightPlane />
        <Reservation />
      </div>
    );
  }
}

export default FlightsShow;
