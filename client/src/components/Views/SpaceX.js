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
  }

  render() {
    const rockets = this.props.rockets;
    console.log(this.props);
    return (
      <div className="route-container">
        <h2 className="spacex-header">SpaceX Info</h2>
        <h3 className="rockets-header">Rockets</h3>
        <div className="rockets-container">
         {rockets.map(function(r) {
          return <Rocket key={r.id} name={r.name} mass={r.mass.lb} firstFlight={r.first_flight} country={r.country} cost={r.cost_per_launch} successRate={r.success_rate_pct}/>
        })} 
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRockets: () => dispatch(fetchRockets())
})

const mapStateToProps = state => ({
  rockets: state.spacex.rockets
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);
