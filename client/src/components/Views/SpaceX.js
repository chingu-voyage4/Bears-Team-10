import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rocket from '../Elements/Rocket';
import { 
  fetchRockets,
  fetchCompanyData,
  fetchLaunchPads,
  fetchUpcomingLaunches,
  fetchPastLaunches
} from '../../actions/spacex-action';

class SpaceX extends Component {
  componentDidMount() {
    this.props.fetchRockets();
    this.props.fetchPastLaunches();
  }

  render() {
    const rockets = this.props.data.rockets;
    const pastLaunches = this.props.data.pastLaunches;
    console.log(pastLaunches);
    return (
      <div className="route-container">
        <h2 className="spacex-header">SpaceX Info</h2>
        <h3 className="rockets-header">Rockets</h3>
        <div className="rockets-container">
         {rockets.map(function(rocket) {
          return <Rocket key={rocket.id} name={rocket.name} mass={rocket.mass.lb} firstFlight={rocket.first_flight} country={rocket.country} cost={rocket.cost_per_launch} successRate={rocket.success_rate_pct}/>
        })} 
        </div>
        <div>
         {pastLaunches.map(function(launch) {
           return <ul> Flight # {launch.flight_number} 
                        <li>Launch Date : {launch.launch_date_local}</li>
                  </ul>
         })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRockets: () => dispatch(fetchRockets()),
  fetchPastLaunches: () => dispatch(fetchPastLaunches())
})

const mapStateToProps = state => ({
  data: state.spacexReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);
