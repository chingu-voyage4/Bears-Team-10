import axios from 'axios';

export function fetchRockets() {
  return function(dispatch) {
    dispatch({type: "FETCH_SPACEX_ROCKETS"});

    axios.get(`https://api.spacexdata.com/v2/rockets`)
      .then((response) => {
        dispatch({type: "FETCH_SPACEX_ROCKETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SPACEX_ROCKETS_REJECTED", payload: err})
      })
  }
}

export function fetchCompanyData() {
    return function(dispatch) {
      dispatch({type: "FETCH_SPACEX_COMPANY"});

      axios.get(`https://api.spacexdata.com/v2/info`)
        .then((response) => {
          dispatch({type: "FETCH_SPACEX_COMPANY_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_SPACEX_COMPANY_REJECTED", payload: err})
        })
    }
}

export function fetchLaunchPads() {
  return function(dispatch) {
    dispatch({type: "FETCH_SPACEX_LAUNCHPADS"});

    axios.get(`https://api.spacexdata.com/v2/launchpads`)
      .then((response) => {
        dispatch({type: "FETCH_SPACEX_LAUNCHPADS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SPACEX_LAUNCHPADS_REJECTED", payload: err})
      })
  }
}

export function fetchUpcomingLaunches() {
  return function(dispatch) {
    dispatch({type: "FETCH_SPACEX_UPCOMING_LAUNCHES"});

    axios.get(`https://api.spacexdata.com/v2/launches/upcoming`)
      .then((response) => {
        dispatch({type: "FETCH_SPACEX_UPCOMING_LAUNCHES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SPACEX_UPCOMING_LAUNCHES_REJECTED", payload: err})
      })
  }
}

export function fetchPastLaunches() {
  return function(dispatch) {
    dispatch({type: "FETCH_SPACEX_PAST_LAUNCHES"});

    axios.get(`https://api.spacexdata.com/v2/launches`)
      .then((response) => {
        dispatch({type: "FETCH_SPACEX_PAST_LAUNCHES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_SPACEX_PAST_LAUNCHES_REJECTED", payload: err})
      })
  }
}
