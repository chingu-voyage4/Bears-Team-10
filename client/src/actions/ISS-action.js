import axios from 'axios';

export function fetchISS() {
  return function (dispatch) {
    dispatch({type: "FETCH_ISS"});

    axios.get(`http://api.open-notify.org/iss-now.json`)
      .then((response) => {
        dispatch({type: "FETCH_ISS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ISS_REJECTED", payload: err})
      })
  }
}
