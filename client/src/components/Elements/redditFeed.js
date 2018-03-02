import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RedditFeed extends Component {
  constructor (props) {
    super(props);

    this.state = {
      redditData: []
    }
  }

  // ${this.props.subreddit}
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.reddit.com/r/${this.props.subreddit}.json?&limit=6`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        this.setState({redditData: data});
        //console.log(this.state.redditData);
      })
  }

  render() {
    return (
      <div className="reddit-container">
        <h3 id="reddit-title">Top {this.props.subreddit} Stories from Reddit</h3>
        <hr />
        <div className="stories">
        <ul>
          {this.state.redditData.map(post =>
              <li key={post.id} className="story"><a href={post.url}>{post.title}</a></li>
            )}
        </ul>
        </div>
      </div>
    );
  }
}

export default RedditFeed;
