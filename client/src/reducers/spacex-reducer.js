
export default function reducer (state={
  rockets: [],
  filter: null,
  company: [],
  activeLaunch: null,
  futureLaunches: [],
  pastLaunches: [],
  launchPads: [],
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
        rockets: action.payload
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
        company: action.payload
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
        launchpads: action.payload
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
        futureLaunches: action.payload
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
        pastLaunches: action.payload
      }
    }
    case "SET_ACTIVE_LAUNCH": {
      return {
        ...state,
        activeLaunch: action.payload
      }
    }
    case "SET_SORT_FILTER": {
      return {
        ...state,
        filter: action.payload
      }
    }
  }
  return state;
}
