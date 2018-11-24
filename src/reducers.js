import { combineReducers } from "redux";
import userDetailsReducer from "./Containers/UserDetails/userDetailsReducer";
import accountDetailsReducer from "./Containers/AccountDetails/accountDetailsReducer";

export default combineReducers({
  userDetailsReducer,
  accountDetailsReducer
});
