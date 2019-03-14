import { ADD_IMAGE, DELETE_IMAGE } from "../actions/types";

const initialState = {
  image: "",
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        image: [action.payload, ...state.image]
      };
    case DELETE_IMAGE:
      return {
        ...state,
        image: state.image.filter(image => image._id !== action.payload)
      };
    default:
      return state;
  }
}
