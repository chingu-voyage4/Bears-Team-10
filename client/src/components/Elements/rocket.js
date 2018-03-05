import React, { Component } from 'react';

class Rocket extends Component {
    formatDate() {
        let date = new Date(this.props.firstFlight);
        return date.toString();
    }

    formatNumber(input) {
        return input.toLocaleString();
    }
    render() {
       return <div className="rocket">
           <a className="rocket-name" href="#">{this.props.name}</a>
           <div className="rocket-property">
               <h5>Country</h5>
            <p>{this.props.country}</p>
           </div>
           <div className="rocket-property">
               <h5>Cost Per Launch</h5>
            <p>${this.formatNumber(this.props.cost)}</p>
           </div>
           <div className="rocket-property">
               <h5>Weight</h5>
            <p>{this.formatNumber(this.props.mass)} lbs.</p>
           </div>
           <div className="rocket-property">
               <h5>First Launch</h5>
            <p>{this.formatDate()}</p>
           </div>
           <div className="rocket-property">
               <h5>Success Rate</h5>
               <p>{this.props.successRate}%</p>
            </div>
        </div>
    }
}

export default Rocket