import customFetch from "../../utils/axios";
import { checkUnathorizedResponse } from "../../utils/axios";

export const allJobsThunk = async (_, thunkAPI) => {
  const { search, searchStatus, searchType, sort, page } = thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const response = await customFetch(url);
    return response.data;
  } catch (error) {
    return checkUnathorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (url, _, thunkAPI) => {
  try {
    const response = await customFetch(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return checkUnathorizedResponse(error, thunkAPI);
  }
};
