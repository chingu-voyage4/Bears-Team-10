import React, { Component } from 'react';
class DisplayLaunch extends Component {

    render() {
        let launchDate = new Date(this.props.launch.launch_date_utc).toString();
        console.log(this.props);
        return (
            <div class="displayLaunch-container">
                            
							<h3 className="displayLaunch-title">Flight #: {this.props.launch.flight_number}</h3>
                            {this.props.launch.links ? (
                                <img id="spacex-mission-patch" src={this.props.launch.links.mission_patch}/>
                            ): null}
							<ul class="displayLaunch-list">
								<li class="displayLaunch-item">Date: {launchDate}</li>
								{this.props.launch.launch_site ? <li class="displayLaunch-item">Site: {this.props.launch.launch_site.site_name}</li> : null}
                                {this.props.launch.launch_success ? <li class="displayLaunch-item success">Success</li> : <li class="displayLaunch-item--failed"> Failed </li>}
								<li class="displayLaunch-item">Resources: {this.props.launch.re} </li>
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