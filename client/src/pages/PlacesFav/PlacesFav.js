import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsPlaceFav from './ResultsPlaceFav';
import Container from '../../components/Containers/Container';

class PlacesFav extends Component {
  constructor(props){
    super(props);
    this.state = {
      favPlaces: [],
      searchString: "",
      resultsArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderFavPlaces = this.renderFavPlaces.bind(this);
  }

  componentDidMount(){
    this.loadFavPlaces();
  }

  loadFavPlaces() {
    API.getFavPlaces()
      .then(res => this.setState({favPlaces: res.data}))
      .catch(err => console.log(err));
  }

  handleFormSubmit(event) {
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
  } 

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFormClear(event) {
    console.log("Clear me!");
    event.preventDefault();
    this.setState(this.baseState);
  }

  renderFavPlaces() {
    return this.state.favPlaces.map((favPlaces, i) => {
      return (
        <ResultsPlaceFav 
          name={favPlaces.name}
          category={favPlaces.category}
          address={favPlaces.address}
          key={i}
          photo={favPlaces.image}
        />
      );        
    });
  }

  render() {

    return (

      <Container width="container">
         <div className="jumbotron">
          <h2 className="text-center">Your Favorite Places</h2>
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
                {this.renderFavPlaces()}              
          </div>
      </Container>

    );
  }
}

export default PlacesFav;