// https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class StackExchange extends Component {
  constructor (props) {
    super(props);

    this.state = {
      stackData: []
    }
  }

  // ${this.props.subreddit}
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow`)
      .then(res => {
        const data = res.data;
        this.setState({stackData: data});
        console.log(this.state.stackData);
      })
  }


  render() {
    return (
      <div>
        <h1>Stack Exchange Data</h1>
        <ul>

        </ul>
      </div>
    );
  }
}
