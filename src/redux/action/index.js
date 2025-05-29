export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_RESULTS = "SET_RESULTS";
export const SET_JOBS = "SET_JOBS";

export const addFavourite = (company) => ({ type: ADD_FAVOURITE, payload: company });
export const removeFavourite = (company) => ({ type: REMOVE_FAVOURITE, payload: company });
export const setResults = (results) => ({ type: SET_RESULTS, payload: results });
export const setJobs = (jobs) => ({ type: SET_JOBS, payload: jobs });

export const fetchJobsByCompany = (company) => {
  return async (dispatch) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
