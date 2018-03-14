import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ISS extends Component {
  constructor(props) {
  super(props);

  this.state = {
      issLatitude: '',
      issLongitude: '',
      time: ''
    }
  }


  componentDidMount() {
    axios.get(`http://api.open-notify.org/iss-now.json`)
      .then( res => {
        const latitude = res.data.iss_position.latitude;
        const longitude = res.data.iss_position.longitude;
        const time = res.data.timestamp;

        this.setState({
          issLatitude: latitude,
          issLongitude: longitude,
          time: time
        })
      })
  }


  render() {
    const longitude = this.state.issLongitude;
    const latitude = this.state.issLatitude;

    return (
      <div className="iss-container">
        <h2>The Internation Space Station is currently located over {latitude} {longitude}</h2>
      </div>
    );
  }
}

export default ISS;
