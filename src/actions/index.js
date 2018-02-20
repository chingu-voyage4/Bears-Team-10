
// This entired block is the "action creator"
export const selectUser = (user) => {
  console.log("You clicked on user: " , user.first)

  // This return is the "action". Consists of type and payload(data).
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
