import React from "react";
import { connect } from "react-redux";
import "./accountDetails.css";
import FilterSection from "./Components/FilterSection/filterSection";
import NavigationTab from "./Components/NavigationTab/navigationTab";
import RepositoryDetails from "./Components/RepositoryDetails/repositoryDetails";
import {fetchRepoData} from "./accountDetailsAction";

export class AccountDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
    
    this.repoData = [];
  }

  componentDidMount() {
    this.props.dispatch(fetchRepoData());
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.repoDataFetched !== this.props.repoDataFetched) {
        this.repoData = nextProps.repoDataFetched;
        this.template = [];
        console.log(this.repoData)
      }
    else if(nextProps.filteredDataPassed !== this.props.filteredDataPassed) {
        this.repoData = nextProps.filteredDataPassed;
        this.template = [];
        console.log(this.repoData)
      }
  }


  render() {
    if(this.repoData && this.repoData.length !== 0){
        this.repoData.forEach(element => {
            this.template.push(<RepositoryDetails key={element.id} name={element.name} description={element.description} time={element.updated_at} programmingLanguage={element.language}/>)
        });
    } 

    return (
        <div className="account-details-container">
            <NavigationTab />
            <FilterSection/>
            {this.template}
        </div>
        
    );
  }
}

const mapStateToProps = state => ({
    repoDataFetched: state.accountDetailsReducer.docType.repoDataFetched,
    filteredDataPassed:  state.accountDetailsReducer.docType.filteredDataPassed
});

export default connect(mapStateToProps)(AccountDetails);