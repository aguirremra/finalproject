import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsPeople from './ResultsPeople';
import ResultsPeopleFavPlaces from './ResultsPeopleFavPlaces';
import ResultsPeopleFavProducts from './ResultsPeopleFavProducts';
import Container from '../../components/Containers/Container';

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      selectedUser: "",
      searchString: "",
      resultsArray: [],
      places: [],
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.getSelectedFavorites = this.getSelectedFavorites.bind(this);
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

  componentDidMount(){
    this.loadUsers();
  }

  loadUsers(){
    API.getUsers()
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
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

  renderUsers() {
    return this.state.users.map((user, i) => {
      return (
        <ResultsPeople 
          name={user.name}
          key={i}
          user_id={user.sub}
          photo={user.image}
          nickname={user.nickname}
          getFavorites={this.getSelectedFavorites}
        />
      );        
    });
  }

  renderUserFavPlaces() {
    console.log("res data places: ", this.state.places);    
    if(this.state.places.length){
      return this.state.places.map((places, i) => {
        return (
          <ResultsPeopleFavPlaces 
            name={places.name}
            photo={places.image} 
            key={i}
            city={places.city}
            address={places.address}
          />
        );        
      });
    }
  }

  renderUserFavProducts() {
    console.log("res data products: ", this.state.products);    
    if(this.state.products.length){
      return this.state.products.map((products, i) => {
        return (
          <ResultsPeopleFavProducts 
          name={products.name}
          category={products.category}
          key={i}
          upc={products.product_id}
          photo={products.image}
          />
        );        
      });
    }
  }  

  getSelectedFavorites(selectedUser){
    console.log("User Id " + selectedUser.user_id);
    API.getFavorites(selectedUser.user_id)
      .then(res => this.setState({
        places: res.data.places,
        products: res.data.products
      }))
      .catch(err => console.log(err));
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
            {this.renderUsers()}              
          </div>
          <div className="row">
            {this.renderUserFavPlaces()}
          </div>
          <div className="row">
            {this.renderUserFavProducts()}
          </div>                     
      </Container>

    );
  }
}

export default People;