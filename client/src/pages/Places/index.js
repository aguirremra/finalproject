import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';

class Places extends Component {
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

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
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
    const { profile } = this.state;
    return (
      <div>
        <div className="container">
          <header>
            <div className="text-center">
                <div>
                  <a 
                    href="/profile"
                    className="btn btn-link"
                  >
                    Profile
                  </a>                
                  <button
                    className="btn btn-link"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </button>

                </div>          
            </div>

            <nav>
                  <a href="/home" className="btn btn-default">home</a>

                  <a href="/people" className="btn btn-default">people</a>

                  <a href="/products" className="btn btn-default">products</a>

                  <a href="/places" className="btn btn-default">places</a>                                                                 
            </nav>


          </header>

    </div>      
    <div className="container">

     <div className="jumbotron">
     <h2 className="text-center">Search for Places</h2>
       <form className="mt-5" onSubmit={this.handleFormSubmit}>
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button id="run-search" className="btn btn-outline-secondary" type="submit">search</button>
        </div>
            <input type="text" id="searchString" onChange={this.handleChange} className="form-control" value={this.state.searchString} />
         </div>
       </form>
      </div> 

      <div className="row">

          <div className="panel-body">
            {this.renderSearch()}
          </div>
      </div>

    </div> 

 
</div>
    );
  }
}

export default Places;