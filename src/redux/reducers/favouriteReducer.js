import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../action/index";

const initialState = [];

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;

    case REMOVE_FAVOURITE:
      return state.filter((company) => company !== action.payload);

    default:
      return state;
  }
};

export default favouriteReducer;
