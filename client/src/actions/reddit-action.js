import axios from 'axios';

export function fetchReddit() {
  return function(dispatch) {
    dispatch({type: "FETCH_REDDIT"});

    //{this.props.subreddit}
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.reddit.com/r/nasa/new.json?&limit=8`)
      .then((response) => {
        dispatch({type: "FETCH_REDDIT_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch:({type: "FETCH_REDDIT_REJECTED", payload: err})
      })
  }
}
