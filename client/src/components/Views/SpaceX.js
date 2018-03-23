import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rocket from '../Elements/Rocket';
import Launch from '../Elements/Launch';
import DisplayLaunch from '../Elements/DisplayLaunch';
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

  populateLaunches() {
    const output = new Set();
    this.props.data.pastLaunches.map(function(launch) {
      output.add(launch.launch_site.site_name);
    })
    return Array.from(output);
  }
  render() {
    const rockets = this.props.data.rockets;
    const pastLaunches = this.props.data.pastLaunches;
    const launchSites = this.populateLaunches();
    const activeLaunch = this.props.data.activeLaunch;
    console.log(launchSites);
    return (
      <div className="route-container">

        <h2 className="spacex-header">SpaceX Info</h2>

        <div className="spacex-container">
          <DisplayLaunch launch={activeLaunch} />
          <div id="launch-sort">
            Sort by <select>
                      <option value="date">Date</option>
                      <optgroup label="Launch Site">
                        {launchSites.map(function(site) {
                          return <option value={site}> {site}</option>
                        })}
                      </optgroup>
                      <optgroup label="Rocket">
                        {rockets.map(function(rocket) {
                          return <option value={rocket.name}> {rocket.name}</option>
                        })}
                      </optgroup>
                    </select>
          </div>
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
