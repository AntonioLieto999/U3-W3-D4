import { SET_JOBS } from "../action";

const initialState = {
  job: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
