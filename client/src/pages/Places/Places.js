import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsPlace from './ResultsPlace';
import Container from '../../components/Containers/Container';

class Places extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      searchString: "",
      resultsArray: [],
      profile: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.getSelectedPlace = this.getSelectedPlace.bind(this);
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
        <ResultsPlace 
          name={place.name}
          rating={place.rating}
          address={place.formatted_address}
          key={i}
          place_id={place.place_id}
          photo={place.photos[0].photo_reference}
          types={place.types}
          getPlace={this.getSelectedPlace}
        />
      );        
    });
  }

  getSelectedPlace(place){
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        // return place;
        API.savePlace({
          place_id: place.place_id, 
          name: place.name,
          image: place.photo,
          address: place.address,
          category: place.category,
          user_id: profile.sub,
          user_nickname: profile.nickname,
          user_image: profile.picture 
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {

    return (

      <Container width="container">
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
                {this.renderSearch()}              
          </div>
      </Container>

    );
  }
}

export default Places;