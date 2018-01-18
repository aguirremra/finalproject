import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsPeople from './ResultsPeople';
import Container from '../../components/Containers/Container';

class People extends Component {
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

  renderSearch() {
    return this.state.resultsArray.map((place, i) => {
      return (
        <ResultsPeople 
          name={place.name}
          rating={place.rating}
          address={place.formatted_address}
          key={i}
          place_id={place.place_id}
          photo={place.photos[0].photo_reference}
          types={place.types}
        />
      );        
    });
  }

  render() {

    return (

      <Container width="container">
         <div className="jumbotron">
          <h2 className="text-center">Search for People</h2>
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
                {this.renderSearch()}              
          </div>
      </Container>

    );
  }
}

export default People;