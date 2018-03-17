
export default function reducer (state={
  redditData: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_REDDIT": {
      return {...state, fetching: true}
    }
    case "FETCH_REDDIT_REJECTED": {
      return {...state, fetching: false,
      error: action.payload}
    }
    case "FETCH_REDDIT_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        redditData: action.payload
      }
    }
  }
  return state;
}
