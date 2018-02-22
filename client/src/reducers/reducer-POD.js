export default function (state = null, action) {
  switch(action.type) {
    case "LOAD_PIC_OF_DAY":
      return action.payload;
      break;
  }
  return state;
}
