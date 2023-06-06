import { takeLatest, put, call, delay } from "redux-saga/effects";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "./reposSlice";
import { getRepoInfo } from "./getRepoInfo";

function* watchFetchReposHandler() {
  try {
    const repos = yield call(getRepoInfo);
    yield delay(500);
    yield put(fetchReposSuccess(repos));
  } catch {
    yield put(fetchReposError());
  }
}

export function* watchFetchRepos() {
  yield takeLatest(fetchRepos.type, watchFetchReposHandler);
}