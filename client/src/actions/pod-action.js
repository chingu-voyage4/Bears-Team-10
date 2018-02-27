import axios from 'axios';

export function fetchPOD() {
  return function(dispatch) {
    dispatch({type: "FETCH_POD"});

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=EvbbbMs402R1t3cBE8oC3oHAx8KCoDDb6IcqPR17`)
      .then((response) => {
        dispatch({type: "FETCH_POD_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POD_REJECTED", payload: err})
      })
  }
}
