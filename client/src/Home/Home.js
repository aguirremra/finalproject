import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../providers/litlist_provider';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      searchString: "",
      resultsArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
  }

  login() {
    this.props.auth.login();
  }

  handleFormSubmit(event){
    console.log(this.state.searchString);
    event.preventDefault();
    API
      .getPlaces(this.state.searchString)
      .then((res) => {
        let returns = [];
        for (let i= 0; i < res.data.results.length; ++i)
          returns.push(res.data.results[i]);
        this.setState({resultsArray: returns})
        console.log(this.state.resultsArray);
      });      
  };

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFormClear(event){
    console.log("Clear me!");
    event.preventDefault();
    this.setState(this.baseState)
  };

  renderSearch(){
      return this.state.resultsArray.map((place, i) => {
        return (
          <div key={i} id={"result_" + (i +1)} className="well">
            <h4>{place.formatted_address}</h4>
          </div>
        )
      })
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>
                .
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
        <div>
          <h2>Place Results Here!</h2>
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="searchString">Search Term:</label>
                    <input type="text" className="form-control" id="searchString" onChange={this.handleChange} value={this.state.searchString} />
                </div>
                <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search </button>
                <button type="button" className="btn btn-default" id="clear-all" onClick={this.handleFormClear}><i className="fa fa-trash"></i> Clear Results </button>
            </form>          
        </div>
          <div className="panel-body">
            {this.renderSearch()}
          </div>

      </div>
    );
  }
}

export default Home;
