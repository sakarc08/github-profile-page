import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./navigationTab.css";
// import {fetchUserData} from "./userDetailsAction";

export default class NavigationTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData : []
    }
  }

  componentDidMount() {
    // this.props.dispatch(fetchUserData());
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.dataFetched !== this.props.dataFetched) {
    //   this.userData = nextProps.dataFetched;
    // }
  }


  render() {
    return (
    <nav className="navigation">
        <a href="/Timer" className="navigation-item" title="Overview">
          Overview
        </a>
        <a href="/Timer?tab=repositories" className="navigation-item selected" title="Repositories">
           Repositories
           <span className="counter">
             87
           </span>
        </a>

        <a href="/Timer?tab=stars" className="navigation-item" title="Stars">
          Stars
          <span className="counter">
            33
          </span>
        </a>

        <a href="/Timer?tab=followers" className="navigation-item" title="Followers">
          Followers
          <span className="counter">
            360
          </span>
        </a>

        <a href="/Timer?tab=following" className="navigation-item" title="Following">
          Following
          <span className="counter">
            10
          </span>
        </a>
    </nav>)
  }
}

// const mapStateToProps = state => ({
//   dataFetched: state.userDetailsReducer.docType.dataFetched
// });

// export default connect(mapStateToProps)(NavigationTab);