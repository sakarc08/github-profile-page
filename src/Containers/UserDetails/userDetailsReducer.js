import { combineReducers } from "redux";
import { generalConfigurationConstants } from "./constants";

export function docType(
  state = {
    dataFetched: false
  },
  action
) {
  switch (action.type) {
    case generalConfigurationConstants.FETCH_USER_DATA: {
      return {
        ...state,
        dataFetched: false
      };
    }
    case generalConfigurationConstants.FETCHED_USER_DATA: {
      return {
        ...state,
        dataFetched: action.payload
      };
    }

    default:
      return state;
  }
}

export default combineReducers({
  docType
});
