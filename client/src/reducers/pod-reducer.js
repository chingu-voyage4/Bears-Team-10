
export default function reducer (state={
  podData: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_POD": {
      return {...state, fetching: true}
    }
    case "FETCH_POD_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POD_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        podData: action.payload
      }
    }
  }
  return state;
}
