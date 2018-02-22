import React, { Component } from 'react';

// API key EvbbbMs402R1t3cBE8oC3oHAx8KCoDDb6IcqPR17

class PictureOfTheDay extends Component {

  render() {
    var d = new Date();
    var date = d.toDateString();
    return (
      <div className="container">
        <h2>Picture of the day for {date}</h2>
        <hr/>
        <div className="description" onLoad={() => {this.props.loadPicOfDay()}}>
          <h3>{this.props.title}</h3>
          <img src={this.props.hdurl} alt="nasa"></img>
          <p>{this.props.explanation}</p>
        </div>
      </div>
    );
  }
}

export default PictureOfTheDay;
