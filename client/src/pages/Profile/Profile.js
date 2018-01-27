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
            comments={places.user_comment}
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
          comments={products.user_comment}
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
            heading={`${profile.given_name ? profile.given_name : profile.nickname}'s LitList`}
            lead={"Search for new products or places to add to your list."}
          />
            <Container className="container mb-2">
                <ApiSearch {...this.props}/>
            </Container> 
          <div id="userProfile" className="container pb-5">
            <div className="card py-3">
              <div className="row">
                <div className="col-sm px-4 py-2 ml-3">
                  <img className="circle avatar-icon" src={profile.picture} alt={profile.name} title={profile.name}/>
                </div>
                <div className="col-sm">
                  <h5 className="card-title mt-3">{profile.name}</h5>
                  <p className="card-text">I'm that actor in some of the movies you liked and some you didn't. Sometimes I'm in pretty good shape, other times I'm not. Hey, you gotta live, you know?</p>
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
          <Container className="container-fluid"> 
            {/* <h3 className="text-center">Your Current List</h3>
            <NavBar 
              currentView={"profile"} 
              {...this.props}
            /> */}
            <Container className="container">
              <h4>{`${profile.given_name ? profile.given_name : profile.nickname}'s Lit Places`}</h4>
              <hr className="hr-shadow" /> 
              <div className="card-columns mt-2">                
                {this.renderUserFavPlaces()}             
              </div>
              <h4>{`${profile.given_name ? profile.given_name : profile.nickname}'s Lit Products`}</h4>
              <hr className="hr-shadow" /> 
              <div className="card-columns mt-2">
                {this.renderUserFavProducts()}
              </div>
            </Container> 
          </Container>
      </div>   
    );
  }
}

export default Profile;
