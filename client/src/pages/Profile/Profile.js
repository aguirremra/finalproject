import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import ApiSearch from '../ApiSearch';
import API from '../../providers/litlist_provider';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: "",//pulled from db somehow
      userPhoto: "",//pulled from db somehow
      userName: "",//pulled from db someho
      userPlaces: [],
      placesCount: 0,
      userProducts: [],
      productsCount: 0,
    }
  }

  /* 
  TODO
  componentWillMount needs to instead get user data
  from db and 
  */
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

  componentDidMount(){
    this.loadUserPlaces();
    this.loadUserProducts();
  }

  /*
  TODO
  loadUserPlaces and loadUserProducts are for getting a particular users place/products
  not finished. 
  not sure how to call up info of specific user (current user or otherwise) from DB
  */
  loadUserPlaces(){
      API
        .getFavorites(this.state.userId)
        .then((res) => {
          let returns = [];
          for (let i= 0; i < res.data.length; ++i)
            returns.push(res.data[i]);

          this.setState({placesCount: returns.length});
          this.setState({userPlaces: returns});
          console.log(this.state.userPlaces);

        });
  }

  loadUserProducts(){
      API
        .getFavorites(this.state.userId)
        .then((res) => {
          let returns = [];
          for (let i= 0; i < res.data.length; ++i)
            returns.push(res.data[i]);

          this.setState({productsCount: returns.length});
          this.setState({userProducts: returns});
          console.log(this.state.userProducts);

        });
  }

  getUserId(){
    
  }




  render() {
    const { profile } = this.state;
    return (
      <div>

          <MainJumbo {...this.props}
            heading={`${profile.given_name ? profile.given_name : profile.nickname}'s Lit List`}
            lead={"Search for new products or places to add to your list. "}
          />

          <div className="container pb-5">
            <div className="card">
              <div className="row">
                <div className="col-sm px-4 py-2 ml-3">
                  <img width="80%" className="circle avatar-icon" src={profile.picture} alt={profile.name} title={profile.name}/>
                </div>
                <div className="col-sm">
                  <h5 className="card-title mt-3">{profile.name}</h5>
                  <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm border-left text-center my-auto">
                    <h2 className="card-title score mt-3 counter-count">{this.state.placesCount}</h2>
                    <p className="card-title">Lit Products</p>
                </div>
                <div className="col-sm mr-3 border-left text-center my-auto">
                  <h2 className="card-title mt-3 score counter-count">{this.state.productsCount}</h2>
                  <p className="card-title">Lit Places</p>
              </div>
              </div>
            </div>
          </div>          
          <Container width="container-fluid">
          
              <Container width="container mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-sm-12 col-md-5 my-auto">
                  <h4>browse community favorites</h4>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <NavBar 
                      currentView={"profile"} 
                      {...this.props}
                    />  
                  </div>             
                </div>
              </Container>

            <Container width="container mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-5 my-auto">
                <h4>search new items</h4>
                </div>
                <div className="col-sm-12 col-md-7">
                    <ApiSearch {...this.props}/>
                </div>             
              </div>
            </Container>

          

            <hr className="mt-5 mb-5"/>
    
   
            <h3 className="text-center"><small>Your Current List</small></h3>

            



          </Container>

      </div>   


    );
  }
}

export default Profile;
