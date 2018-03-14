
export default function reducer (state={
  issData: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_ISS": {
      return {...state, fetching: true}
    }
    case "FETCH_ISS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_ISS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        issData: action.payload
      }
    }
  }
  return state;
}
