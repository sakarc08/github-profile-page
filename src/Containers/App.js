import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import UserDetails  from "./UserDetails/userDetails";
import AccountDetails from "./AccountDetails/accountDetails";
import store from "../store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <UserDetails />
          <AccountDetails />
        </div>
      </Provider>
    );
  }
}

export default App;
