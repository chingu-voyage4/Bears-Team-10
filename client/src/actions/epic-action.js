import axios from 'axios';

export function fetchEPIC() {
  return function(dispatch) {
    dispatch({type: "FETCH_EPIC"});

    axios.get(`https://epic.gsfc.nasa.gov/api/enhanced`)
      .then((response) => {
        dispatch({type: "FETCH_EPIC_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_EPIC_REJECTED", payload: err})
      })
  }
}
