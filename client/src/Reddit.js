import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Reddit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      redditData: []
    }
  }

  // ${this.props.subreddit}
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        this.setState({redditData: data});
        console.log(this.state.redditData);
      })
  }


  render() {
    return (
      <div>
        <h1>Top {this.props.subreddit} Stories from Reddit</h1>
        <ul>
          {this.state.redditData.map(post =>
              <li key={post.id}><a href={post.url}>{post.title}</a></li>
            )}
        </ul>
      </div>
    );
  }
}
