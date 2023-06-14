import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",

  initialState: {
    reposStatus: "initial",
    repos: [],
  },

  reducers: {
    fetchRepos: () => ({
      reposStatus: "loading",
    }),
    fetchReposError: () => ({
      reposStatus: "error",
    }),
    fetchReposSuccess: (_, { payload: repos }) => ({
      reposStatus: "success",
      repos,
    }),
  },
});

export const { fetchRepos, fetchReposError, fetchReposSuccess } =
  reposSlice.actions;

export const selectReposSlice = (state) => state.portfolio;
export const selectreposStatus = (state) => selectReposSlice(state).reposStatus;
export const selectRepos = (state) => selectReposSlice(state).repos;

export default reposSlice.reducer;
