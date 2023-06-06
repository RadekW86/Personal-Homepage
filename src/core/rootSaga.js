import { all } from "redux-saga/effects";
import { watchFetchRepos } from "../features/Homepage/reposSaga";

export default function* () {
  yield all([watchFetchRepos()]);
}
