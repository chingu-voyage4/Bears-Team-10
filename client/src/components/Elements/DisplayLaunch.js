import React, { Component } from 'react';

class DisplayLaunch extends Component {
    render() {
        console.log(this.props);
        return (
            <div class="">
                <h3>Flight #: {this.props.launch.flight_number}</h3>
                <ul class="DisplayLaunch-info">
                    <li>Date: {this.props.launch.launch_date_local}</li>
                    <li>Site:</li>
                    <li>Success: {this.props.launch.launch_success}</li>
                    <li>Resources: </li>
                </ul>
                <div class="Displaylaunch-details">
                    <h3>Details</h3>
                {this.props.launch.details}
                </div>

            </div>
        ) 
    }
}

export default DisplayLaunch