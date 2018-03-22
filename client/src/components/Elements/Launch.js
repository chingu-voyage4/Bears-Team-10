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
            <li className="mdc-list-item" onClick={this.handleClick.bind(this)}>
                <span className="mdc-list-item__text">Flight #{this.props.launch.flight_number}
                    <span className="mdc-list-item__secondary-text">Date: {this.props.launch.launch_date_utc}
                    </span>
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