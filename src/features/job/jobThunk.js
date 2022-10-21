import { clearValues } from "./jobSlice";
import customFetch from "../../utils/axios";
import { getAllJobs } from "../allJobs/allJobsSlice";
import { checkUnathorizedResponse } from "../../utils/axios";

export const createJobThunk = async (url, job, thunkAPI) => {
  try {
    const response = await customFetch.post(url, job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return checkUnathorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (url, jobId, thunkAPI) => {
  try {
    const response = await customFetch.delete(`${url}${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return response.data;
  } catch (error) {
    return checkUnathorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async (url, { jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`${url}${jobId}`, job);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return checkUnathorizedResponse(error, thunkAPI);
  }
};
