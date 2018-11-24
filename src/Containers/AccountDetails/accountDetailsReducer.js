import { combineReducers } from "redux";
import { generalConfigurationConstants } from "./constants";

export function docType(
  state = {
    repoDataFetched: false,
    repoDataFiltered: false,
    filteredData: [],
    filteredDataPassed: []
  },
  action
) {
  switch (action.type) {
    case generalConfigurationConstants.FETCH_REPO_DATA: {
      return {
        ...state,
        repoDataFetched: false
      };
    }
    case generalConfigurationConstants.FETCHED_REPO_DATA: {
      return {
        ...state,
        repoDataFetched: action.payload
      };
    }

    case generalConfigurationConstants.FILTER_REPO_BY_NAME: {
      state.filteredData = [];
      state.repoDataFetched.forEach(element => {
        if(element.name.includes(action.payload.searchText)) state.filteredData.push(element);
      });

      return {
        ...state,
        filteredDataPassed: state.filteredData
      };
    }
    
    case generalConfigurationConstants.FILTER_REPO_BY_LANGUAGE: {
      state.filteredData = [];
      state.repoDataFetched.forEach(element => {
        if(element.language === action.payload.searchText) state.filteredData.push(element);
      });

      return {
        ...state,
        filteredDataPassed: state.filteredData
      };
    }

    case generalConfigurationConstants.FILTER_REPO_BY_TYPE: {
      state.filteredData = [];
      state.repoDataFetched.forEach(element => {
        if(action.payload.searchText === "all") state.filteredData.push(element);
        else if(element[action.payload.searchText]) state.filteredData.push(element);
      });

      return {
        ...state,
        filteredDataPassed: state.filteredData
      };
    }
    
    default:
      return state;
  }
}

export default combineReducers({
  docType
});
