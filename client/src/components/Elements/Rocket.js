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
           <h2 className="rocket-name">{this.props.name}</h2>
           <table class="table">
            </table>
        </div>
    }
}

export default Rocket