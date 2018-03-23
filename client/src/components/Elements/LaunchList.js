import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Launch from '../Elements/Launch';
class LaunchList extends Component {
    sort() {
        const filter = this.props.data.filter;
        if (filter) {
            let output = this.props.launches.filter(function(launch) {
                if (launch.rocket.rocket_name === filter || launch.launch_site.site_name === filter) {
                    return launch;
                }
            });
            return output;
        } else {
            return this.props.launches;
        }
    }
    render() {
        console.log(this.props);
        const launches = this.sort();
        return (
            <div id="launch-container">
                <ul className="mdc-list">
                {launches.map(function(launch) {
                    return <Launch launch={launch}/>
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.spacexReducer
})

export default connect(mapStateToProps, null)(LaunchList)