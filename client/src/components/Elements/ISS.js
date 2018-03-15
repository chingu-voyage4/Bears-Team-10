import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchISS } from '../../actions/ISS-action';

class ISS extends Component {
  componentDidMount() {
    this.props.fetchISS();
  }


  render() {
    const {iss} = this.props;
    const data = iss.issData;
    //console.log(data);
    const time = this.props.iss.issData.timestamp;
    //console.log(time);

    const lat = Object.keys(data).map(key => {
      return (data[key].latitude);
    })

    const long = Object.keys(data).map(key => {
      return (data[key].longitude);
    })


    return (
      <div className="iss-container">
        <h2>As of {time} the Internation Space Station is currently located over</h2>
        <p>{lat}</p>
        <p>{long}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchISS: () => dispatch(fetchISS())
})

const mapStateToProps = state => ({
  iss: state.ISSReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(ISS);
