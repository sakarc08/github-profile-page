import {
    fetchedUserData, fetchedRepoData
} from "../userDetailsAction";
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchService } from "../../../Services/api";

const fetchUserDataApi = () => fetchService("https://api.github.com/users/supreetsingh247");

function* fetchUserData() {
  try {
    const data = yield call(fetchUserDataApi);
    yield put(fetchedUserData(data));
  } catch (error) {
    yield put({ type: "SERVICE_ERROR", error });
  }
}

export function* fetchUsersDataSaga() {
  yield takeLatest("FETCH_USER_DATA", fetchUserData);
}

