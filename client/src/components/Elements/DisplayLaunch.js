import React, { Component } from 'react';

class DisplayLaunch extends Component {
    render() {
        console.log(this.props);
        return (
            <div class="displayLaunch-container">
							<h3 className="displayLaunch-title">Flight #: {this.props.launch.flight_number}</h3>

							<ul class="displayLaunch-list">
								<li class="displayLaunch-item">Date: {this.props.launch.launch_date_local}</li>
								<li class="displayLaunch-item">Site:</li>
								<li class="displayLaunch-item">Success: {this.props.launch.launch_success}</li>
								<li class="displayLaunch-item">Resources: </li>
							</ul>
							<div class="Displaylaunch-details">
								<h3 className="displayLaunch-title">Details</h3>
								{this.props.launch.details}
							</div>
            </div>
        ) 
    }
}

export default DisplayLaunch