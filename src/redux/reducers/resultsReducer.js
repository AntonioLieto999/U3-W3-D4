import { SET_RESULTS } from "../action";

const initialState = {
  content: [],
};
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default resultsReducer;
