import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchReddit } from '../../actions/reddit-action';

class RedditFeed extends Component {
    componentDidMount() {
      this.props.fetchReddit();
    }

  render() {
    const data = this.props.data.redditData;
    //console.log(data);
    const display = Object.keys(data).map((d, key) => {
      console.log(data.data.children[key].data.title);
      console.log(data.data.children[key].data.url);
      return (
          <div className="story">
            <li key={key}>
              <a href={data.data.children[key].data.url}>
              {data.data.children[key].data.title}</a><br/>
            </li>
          </div>
      )
    })
    return (
      <div className="reddit-container">
        <h3 id="reddit-title">Top {this.props.subreddit} Stories from Reddit</h3>
        <hr />
        <div className="stories">
        <ul>
          {display}
        </ul>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchReddit: () => dispatch(fetchReddit())
})

const mapStateToProps = state => ({
  data: state.redditReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(RedditFeed);
