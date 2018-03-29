import React, { Component } from 'react';
import LgIcon from '../Icons/LgIcon';
import { YOUTUBE_ICON } from '../Icons/IconList';
class DisplayLaunch extends Component {

    render() {
        let launchDate = new Date(this.props.launch.launch_date_utc).toString();
        console.log(this.props);
        return (
            <div class="displayLaunch-container">
                            
							<h2 className="displayLaunch-title">Flight #: {this.props.launch.flight_number}</h2>
                            {this.props.launch.links ? (
                                <img id="spacex-mission-patch" src={this.props.launch.links.mission_patch}/>
                            ): null}
							<ul className="displayLaunch-list">
								<h3 className="displayLaunch-title">Date</h3>
                                    <li className="displayLaunch-item">{launchDate}</li>
								<h3 className="displayLaunch-title">Site</h3>
                                    <li className="displayLaunch-item">{this.props.launch.launch_site.site_name}</li>
                                <h3 className="displayLaunch-title">Resources</h3>
								<li className="displayLaunch-item">
                                {this.props.launch.links ? ( 
                                    <a href={this.props.launch.links.video_link}><LgIcon icon={YOUTUBE_ICON} color="red"/></a>
                                ) : ("N/A")}
                                </li>
							</ul>
							<div className="displayLaunch-details">
								<h3 className="displayLaunch-title">Details</h3>
                                {this.props.launch.launch_success ? <h4 id="success">Successful Launch</h4> : <h4 id="failed"> Failed Launch</h4>}
								{this.props.launch.details}
							</div>
            </div>
        ) 
    }
}

export default DisplayLaunch