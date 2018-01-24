import React, { Component } from 'react';
import API from '../../providers/litlist_provider';
import ResultsPlaceFav from './ResultsPlaceFav';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import Container from '../../components/Containers/Container';

class PlacesFav extends Component {
  constructor(props){
    super(props);
    this.state = {
      favPlaces: [],
      resultsArray: []
    }
  }

  componentDidMount(){
    this.loadFavPlaces();
  }

  loadFavPlaces(){
    API.getFavPlaces()
      .then(res => this.setState({favPlaces: res.data}))
      .catch(err => console.log(err));
  }

  renderFavPlaces(){
    return this.state.favPlaces.map((favPlaces, i) => {
      return (
        <ResultsPlaceFav
          name={favPlaces.name}
          category={favPlaces.category}
          address={favPlaces.address}
          key={i}
          photo={favPlaces.image}
          city={favPlaces.city}
        />
      );
    });
  }

  render() {

    return (

        <div>
        
            <MainJumbo
              heading={"The Places of Lit List"}
              lead={"Explore the places favorited by other community members."}
            />
            <NavBar 
              currentView={"places"} 
              {...this.props}
            />

            <Container width="container">

            <hr className="mt-5 mt-5"/>
              <div id="placeholderText" className="row">
                {this.renderFavPlaces()}         
              </div>
            </Container> 

        </div>

    );
  }
}

export default PlacesFav;