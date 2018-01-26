import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import ApiSearch from '../ApiSearch';
import API from '../../providers/litlist_provider';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import ResultsProfileFavPlaces from './ResultsProfileFavPlaces';
import ResultsProfileFavProducts from './ResultsProfileFavProducts';
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      products: []
    }
  }


  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile " + profile.sub);
        this.getSelectedFavorites(profile.sub);      
      });
  }

  getSelectedFavorites(selectedUser){
    console.log("User Id " + selectedUser);
    API.getFavorites(selectedUser)
      .then(res => this.setState({
        places: res.data.places,
        products: res.data.products
      }))
      .catch(err => console.log(err));
  }


  renderUserFavPlaces() { 
    if(this.state.places.length){
      return this.state.places.map((places, i) => {
        return (
          <ResultsProfileFavPlaces 
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
    if(this.state.products.length){
      return this.state.products.map((products, i) => {
        return (
          <ResultsProfileFavProducts 
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

  render() {
    const { profile } = this.state;
    return (
      <div>

          <MainJumbo {...this.props}
            heading={`${profile.given_name ? profile.given_name : profile.nickname}'s Lit List`}
            lead={"Search for new products or places to add to your list."}
          />
          <NavBar 
            currentView={"profile"} 
            {...this.props}
          /> 

          <div className="container pb-5">
            <div className="card">
              <div className="row">
                <div className="col-sm px-4 py-2 ml-3">
                  <img className="circle avatar-icon" src={profile.picture} alt={profile.name} title={profile.name}/>
                </div>
                <div className="col-sm">
                  <h5 className="card-title mt-3">{profile.name}</h5>
                  <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm border-left text-center my-auto">
                    <h2 className="card-title score mt-3 counter-count">{this.state.products.length || '0'}</h2>
                    <p className="card-title">Lit Products</p>
                </div>
                <div className="col-sm mr-3 border-left text-center my-auto">
                  <h2 className="card-title mt-3 score counter-count">{this.state.places.length || '0'}</h2>
                  <p className="card-title">Lit Places</p>
              </div>
              </div>
            </div>
          </div>
          <Container width="container-fluid">
            <Container width="container mb-5">
                <h4 className="text-center">Search for New Products and Places</h4>
                <ApiSearch {...this.props}/>
            </Container>          
            <hr className="mt-5 mb-5"/>    
            <h3 className="text-center"><small>Your Current List</small></h3>
            <Container width="container">
              <h3>LiT Places</h3>
              <div className="card-columns mt-5">                
                {this.renderUserFavPlaces()}             
              </div>
              <h3>LiT Products</h3>  
              <div className="card-columns mt-5">
              {this.renderUserFavProducts()}             
              </div>
            </Container> 
          </Container>
      </div>   
    );
  }
}

export default Profile;
