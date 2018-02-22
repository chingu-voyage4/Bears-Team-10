import axios from "axios";


// This entired block is the "action creator"
export const selectUser = (user) => {
  console.log("You clicked on user: " , user.first)

  // This return is the "action". Consists of type and payload(data).
  return {
    type: "USER_SELECTED",
    payload: user
  }
};

export const PicOfDay = (data) => {
  return(dispatch) => {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=EvbbbMs402R1t3cBE8oC3oHAx8KCoDDb6IcqPR17`)
      .then((response) => {
        dispatch((loadPicOfDay(response.data)));
        console.log("Loading axios data from action component: " + response.data );
      })
  }
};


export const loadPicOfDay = (data) => {
  return {
    type: "PIC_OF_DAY_LOAD",
    payload: data
  }
};
