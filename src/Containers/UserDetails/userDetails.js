import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./userDetails.css";
import {fetchUserData} from "./userDetailsAction";

export class UserDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData : []
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchUserData());
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.dataFetched !== this.props.dataFetched) {
      this.userData = nextProps.dataFetched;
    }
  }


  render() {
    this.template = this.userData ? (
    <div className="user-details-container col-3">
      <div className="border-container">
        <div className="user-image-container">
          <img alt="User" src= {this.userData ? this.userData.avatar_url : ""} className="user-display-image"></img>
        </div>

        <div className="user-contact-container">
          <div className="user-bio-container">
            <span className="username" >{this.userData.name}</span>
            <span className="userLogin" >{this.userData.login}</span>
          </div>
          <ul className="location-details">
            <li className="address-details">
              <span className="p-label">{this.userData.location}</span>
            </li>
            <li className="address-details">
              <a href="/login?return_to=https%3A%2F%2Fgithub.com%2FTimer" className="social-link">Sign in to view email</a>
            </li>
            <li className="address-details">
              <a className="social-link" href="https://twitter.com/timer150">https://twitter.com/timer150</a>
            </li>
          </ul>
        </div>
      
        <div className="user-bio">
          <span className="bio" >{this.userData.bio}</span>
          <button className="edit-bio-button">Edit Bio</button>
        </div>
      </div>
    </div>) : null;

    return this.template;
  }
}

const mapStateToProps = state => ({
  dataFetched: state.userDetailsReducer.docType.dataFetched
});

export default connect(mapStateToProps)(UserDetails);