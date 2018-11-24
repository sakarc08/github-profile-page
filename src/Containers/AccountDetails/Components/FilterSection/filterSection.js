import React from "react";
import { connect } from "react-redux";
import "./filterSection.css";
import {filterByName, filterByLanguage, filterByType} from "../../accountDetailsAction";

export class FilterSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData : [],
      searchText : "",
      typeDropdownStatus: false,
      languageDropdownStatus: false
    }
    this.repoData = [];
    this.userDetails = [];
    this.onInputChange = this.onInputChange.bind(this);
    this.typeDropdownHandler = this.typeDropdownHandler.bind(this);
    this.languageDropdownHandler = this.languageDropdownHandler.bind(this);
    this.languageFilter = this.languageFilter.bind(this);
    this.typeFilter = this.typeFilter.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(fetchUserData());
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.repoDataFetched !== this.props.repoDataFetched) {
        this.repoData = nextProps.repoDataFetched;
        this.userDetails = nextProps.dataFetched
        console.log(this.repoData)
        console.log("user in filter ", this.userDetails)
      }
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({searchText : event.target.value})

    this.props.dispatch(filterByName(event.target.value));
    // this.props.dispatch(filterRepos(this.userDetails.html_url,this.state.searchText))
  }

  typeDropdownHandler() {
    this.setState({typeDropdownStatus : !this.state.typeDropdownStatus, languageDropdownStatus : false});
  }

  languageDropdownHandler() {
      this.setState({languageDropdownStatus : !this.state.languageDropdownStatus, typeDropdownStatus : false})
  }

  languageFilter(event) {
    console.log(event.target.value);
    this.props.dispatch(filterByLanguage(event.target.value));
  }

  typeFilter(event) {
    this.props.dispatch(filterByType(event.target.value));
  }

  render() {
    return (
    <div className="filter-container">
        <div className="search">
            <input type="hidden" name="tab" value="repositories" />
            <input type="search" placeholder="Find a repository…" value={this.state.searchText} className="search-input" onChange={evt => this.onInputChange(evt)}/>
        </div>
        
        <div className="select-menu-container">
            <button className="select-menu-button btn" onClick={this.typeDropdownHandler}>
                <i className="btn-label">Type:</i>
                <span className="js-select-button">
                    All
                </span>
            </button>
            {this.state.typeDropdownStatus ? (   <div className="type-selector-container">
            <div className="type-dropdown-open">
                <div className="select-menu">
                    <div className="select-menu-header">
                        <span className="select-menu-title">Select type:</span>
                    </div>
                    <div className="select-menu-list">

                <button className="menu-item" onClick={this.typeFilter}>
                  <input type="radio" name="type" value="all" />
                  
                  <span className="select-menu-item-text js-select-button-text">All</span>
                </button>

                <button className="menu-item" onClick={this.typeFilter}>
                  <input type="radio" name="type" value="source" />
                  
                  <span className="select-menu-item-text js-select-button-text">Sources</span>
                </button>

                <button  className="menu-item" onClick={this.typeFilter}>
                  <input type="radio" name="type" value="fork" />
                  
                  <span className="select-menu-item-text js-select-button-text">Forks</span>
                </button>

                <button className="menu-item" onClick={this.typeFilter}>
                  <input type="radio" name="type" value="archived" />
                  
                  <span className="select-menu-item-text js-select-button-text">Archived</span>
                </button>

                <button className="menu-item" onClick={this.typeFilter}>
                  <input type="radio" name="type" value="mirror" />
                  
                  <span className="select-menu-item-text js-select-button-text">Mirrors</span>
                </button>
            </div>
                </div>
            </div>
        </div>) : null}
         
        <button className="select-menu-button btn" onClick={this.languageDropdownHandler}>
                <i className="btn-label">Language:</i>
                <span className="js-select-button">
                    All
                </span>
            </button>
            {this.state.languageDropdownStatus ? (   <div className="type-selector-container">
            <div className="type-dropdown-open">
                <div className="select-menu">
                    <div className="select-menu-header">
                        <span className="select-menu-title">Select type:</span>
                    </div>
                    <div className="select-menu-list">
                
                <button className="menu-item" onClick={this.languageFilter} >
                  <input type="radio" name="type" value="JavaScript" />
                  
                  <span className="select-menu-item-text js-select-button-text">Javascript</span>
                </button>

                <button  className="menu-item" onClick={this.languageFilter}>
                  <input type="radio" name="type" value="CSS" />
                  
                  <span className="select-menu-item-text js-select-button-text">CSS</span>
                </button>

                <button className="menu-item" onClick={this.languageFilter}>
                  <input type="radio" name="type" value="HTML" />
                  
                  <span className="select-menu-item-text js-select-button-text">HTML</span>
                </button>
            </div>
                </div>
            </div>
        </div>) : null}
        <a className="btn new-button" href="/">New</a>
        </div>
    </div>
   
  )
  }
}

const mapStateToProps = state => ({
    dataFetched: state.userDetailsReducer.docType.dataFetched,
    repoDataFetched: state.accountDetailsReducer.docType.repoDataFetched
});

export default connect(mapStateToProps)(FilterSection);