import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRockets } from '../../actions/spacex-action';
import { fetchCompanyData } from '../../actions/spacex-action';
import { fetchLaunchPads } from '../../actions/spacex-action';
import { fetchUpcomingLaunches } from '../../actions/spacex-action';
import { fetchPastLaunches } from '../../actions/spacex-action';

class SpaceX extends Component {
  componentDidMount() {
    this.props.fetchRockets();
  }

  render() {
    const rockets = this.props.rockets;
    return (
      <div className="container">
        <h2>SpaceX Info</h2>
        <tr>
          <td>Name</td>
          <td>Weight</td>
          <td>First Launch</td>
          <td>Country</td>
          <td>Cost Per Launch</td>
        </tr>
        {rockets.map(function(r) {
          return <tr> 
                  <td>{r.name}</td>
                  <td>{r.mass.lb} lbs</td>
                  <td>{r.first_flight}</td>
                  <td>{r.country}</td>
                  <td>{r.cost_per_launch}</td>
                </tr>;
        })}
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchRockets: () => dispatch(fetchRockets())
})

const mapStateToProps = state => ({
  rockets: state.spacex.spacexData
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);
