import { fork } from "redux-saga/effects";
import { fetchUsersDataSaga } from "../Containers/UserDetails/sagas/user-details-saga";
import { fetchRepoDataSaga, filterRepoDataSaga } from "../Containers/AccountDetails/sagas/account-details-saga";


export const configureSagas = () =>
  function* DeviceRotationRate() {
    yield [
      fork(fetchUsersDataSaga),
      fork(fetchRepoDataSaga),
      fork(filterRepoDataSaga)
    ];
};
