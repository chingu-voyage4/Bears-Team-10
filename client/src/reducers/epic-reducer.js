
export default function reducer (state = {
  epicData: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch(action.type) {
    case "FETCH_EPIC": {
      return {...state, fetching: true}
    }
    case "FETCH_EPIC_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_EPIC_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        epicData: action.payload
      }
    }
  }
  return state;
}
