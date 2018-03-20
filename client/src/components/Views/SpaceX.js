import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rocket from '../Elements/Rocket';
import Launch from '../Elements/Launch'
import { 
  fetchRockets,
  fetchCompanyData,
  fetchLaunchPads,
  fetchUpcomingLaunches,
  fetchPastLaunches,
} from '../../actions/spacex-action';

class SpaceX extends Component {
  componentDidMount() {
    this.props.fetchRockets();
    this.props.fetchPastLaunches();
    this.props.fetchFutureLaunches();
  }
  render() {
    const rockets = this.props.data.rockets;
    const pastLaunches = this.props.data.pastLaunches;
    return (
      <div className="route-container">
        <h2 className="spacex-header">SpaceX Info</h2>
        <div className="spacex-container">
          <div id="launch-container">
            <ul className="mdc-list">
              {pastLaunches.map(function(launch) {
                return <Launch launch={launch}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRockets: () => dispatch(fetchRockets()),
  fetchPastLaunches: () => dispatch(fetchPastLaunches()),
  fetchFutureLaunches: () => dispatch(fetchUpcomingLaunches()),
})

const mapStateToProps = state => ({
  data: state.spacexReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);
