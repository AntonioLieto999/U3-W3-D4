import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import resultsReducers from "../reducers/resultsReducer";
import jobsReducer from "../reducers/jobResults";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  results: resultsReducers,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
