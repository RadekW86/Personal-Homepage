import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",

  initialState: {},

  reducers: {
    fetchRepos: () => ({
      reposState: "loading",
    }),
    fetchReposError: () => ({
      reposState: "error",
    }),
    fetchReposSuccess: (_, { payload: repos }) => ({
      reposState: "success",
      repos,
    }),
  },
});

export const { fetchRepos, fetchReposError, fetchReposSuccess } =
  reposSlice.actions;

export const selectReposSlice = (state) => state.portfolio;
export const selectReposState = (state) => selectReposSlice(state).reposState;
export const selectRepos = (state) => selectReposSlice(state).repos;

export default reposSlice.reducer;
