import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { 
    setActiveLaunch
  } from '../../actions/spacex-action';

class Launch extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.onLaunchClick(this.props.launch);
    }
    render() {
        return (
            <li className="list-item" onClick={this.handleClick.bind(this)}>
                <span className="list-item-text">Flight #{this.props.launch.flight_number}
                </span> 
                <span className="list-item-secondary-text">Date: {this.props.launch.launch_date_utc}
                </span>       
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLaunchClick(launch) {
        dispatch(setActiveLaunch(launch));
    },
})

export default connect(null, mapDispatchToProps)(Launch);