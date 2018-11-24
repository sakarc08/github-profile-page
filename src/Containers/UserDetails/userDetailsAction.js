import { generalConfigurationConstants } from "./constants";

export function fetchUserData() {
  return {
    type: generalConfigurationConstants.FETCH_USER_DATA
  };
}

export function fetchedUserData(data) {
  return {
    type: generalConfigurationConstants.FETCHED_USER_DATA,
    payload: data
  };
}
