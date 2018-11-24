import {
  fetchedRepoData,filteredRepoData
} from "../accountDetailsAction";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchService } from "../../../Services/api";


const fetchRepoDataApi = () => fetchService("https://api.github.com/users/supreetsingh247/repos");

function* fetchRepoData() {
  try {
    const data = yield call(fetchRepoDataApi);
    yield put(fetchedRepoData(data));
  } catch (error) {
    yield put({ type: "SERVICE_ERROR", error });
  }
}

export function* fetchRepoDataSaga() {
  yield takeLatest("FETCH_REPO_DATA", fetchRepoData);
}

const filterRepoDataApi = (payload) => fetchService(`${payload.url}?utf8=&tab=repositories&q=${payload.searchText}&type=&language=`);

function* filterRepoData(action) {
  try {
    const data = yield call(filterRepoDataApi, action.payload);
    yield put(filteredRepoData(data));
  } catch (error) {
    yield put({ type: "SERVICE_ERROR", error });
  }
}

export function* filterRepoDataSaga() {
  yield takeLatest("FILTER_REPO", filterRepoData);
}

