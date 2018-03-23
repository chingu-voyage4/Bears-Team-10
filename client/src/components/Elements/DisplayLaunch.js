import React, { Component } from 'react';

class DisplayLaunch extends Component {
    render() {
        console.log(this.props);
        return (
            <div class="displayLaunch-container">
							<h3 className="displayLaunch-title">Flight #: {this.props.launch.flight_number}</h3>

							<ul class="displayLaunch-list">
								<li class="displayLaunch-item">Date: {this.props.launch.launch_date_local}</li>
								{this.props.launch.launch_site ? <li class="displayLaunch-item">Site: {this.props.launch.launch_site.site_name}</li> : null}
                                {this.props.launch.launch_success ? <li class="displayLaunch-item success">Success</li> : <li class="displayLaunch-item--failed"> Failed </li>}
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