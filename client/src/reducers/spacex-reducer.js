
export default function reducer (state={
  spacexData: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_SPACEX_ROCKETS": {
      return {...state, fetching: true}
    }
    case "FETCH_SPACEX_ROCKETS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SPACEX_ROCKETS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        spacexData: action.payload
      }
    }
    case "FETCH_SPACEX_COMPANY": {
      return {...state, fetching: true}
    }
    case "FETCH_SPACEX_COMPANY_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SPACEX_COMPANY_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        spacexData: action.payload
      }
    }
    case "FETCH_SPACEX_LAUNCHPADS": {
      return {...state, fetching: true}
    }
    case "FETCH_SPACEX_LAUNCHPADS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SPACEX_LAUNCHPADS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        spacexData: action.payload
      }
    }
    case "FETCH_SPACEX_UPCOMING_LAUNCHES": {
      return {...state, fetching: true}
    }
    case "FETCH_SPACEX_UPCOMING_LAUNCHES_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SPACEX_UPCOMING_LAUNCHES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        spacexData: action.payload
      }
    }
    case "FETCH_SPACEX_PAST_LAUNCHES": {
      return {...state, fetching: true}
    }
    case "FETCH_SPACEX_PAST_LAUNCHES_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_SPACEX_PAST_LAUNCHES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        spacexData: action.payload
      }
    }
  }
  return state;
}
