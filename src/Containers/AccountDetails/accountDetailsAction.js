import { generalConfigurationConstants } from "./constants";

// Repo Details

export function fetchRepoData() {
  return {
    type: generalConfigurationConstants.FETCH_REPO_DATA
  };
}

export function fetchedRepoData(data) {
  return {
    type: generalConfigurationConstants.FETCHED_REPO_DATA,
    payload: data
  };
}

export function filterRepos(url,searchText) {
  return {
    type: generalConfigurationConstants.FILTER_REPO,
    payload: {url,searchText}
  };
}

export function filteredRepoData(data) {
  return {
    type: generalConfigurationConstants.FILTERED_REPO_DATA,
    payload: data
  };
}

export function filterByName(searchText) {
  return {
    type: generalConfigurationConstants.FILTER_REPO_BY_NAME,
    payload: {searchText}
  };
}

export function filterByLanguage(searchText) {
    return {
      type: generalConfigurationConstants.FILTER_REPO_BY_LANGUAGE,
      payload: {searchText}
    };
}

export function filterByType(searchText) {
  return {
    type: generalConfigurationConstants.FILTER_REPO_BY_TYPE,
    payload: {searchText}
  };
}

