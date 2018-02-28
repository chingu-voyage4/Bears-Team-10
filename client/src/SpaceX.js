import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchRockets} from './actions/spacex-action';
import {fetchCompanyData} from './actions/spacex-action';
import {fetchLaunchPads} from './actions/spacex-action';
import {fetchUpcomingLaunches} from './actions/spacex-action';
import {fetchPastLaunches} from './actions/spacex-action';

class SpaceX extends Component {
  componentDidMount() {
    this.props.fetchRockets();
  }

  render() {
    const {rockets} = this.props;

    return (
      <div className="container">
        <h2>SpaceX Info</h2>

      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchRockets: () => dispatch(fetchRockets())
})

const mapStateToProps = state => ({
  rockets: state.rockets
})

export default connect(mapStateToProps, mapDispatchToProps)(SpaceX);
