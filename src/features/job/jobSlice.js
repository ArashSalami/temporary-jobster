import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";

import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

const initialState = {
  position: "",
  company: "",
  jobLocation: "",
  statusOptions: ["pending", "declined", "interview"],
  status: "pending",
  isEditing: false,
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  isLoading: false,
  editJobId: "",
};

export const createJob = createAsyncThunk("job/createJob", async (job, thunkAPI) => {
  return createJobThunk("/jobs", job, thunkAPI);
});

export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPI) => {
  return deleteJobThunk("/jobs/", jobId, thunkAPI);
});

export const editJob = createAsyncThunk("job/editJob", async ({ jobId, job }, thunkAPI) => {
  return editJobThunk("/jobs/", { jobId, job }, thunkAPI);
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearValues: () => {
      return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || "" };
    },
    setEditJob: (state, { payload }) => {
      console.log(payload);
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job Created Successfully");
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteJob.fulfilled]: (state) => {
      state.isLoading = false;

      toast.success("Job Deleted Successfully");
    },
    [deleteJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job Edited Successfully");
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default jobSlice.reducer;

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
