import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../action/index";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
