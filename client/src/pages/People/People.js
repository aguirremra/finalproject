import React, { Component } from 'react';
import API from '../../providers/litlist_provider';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import ResultsPeople from './ResultsPeople';
import ResultsPeopleFavProducts from './ResultsPeopleFavProducts';
import ResultsPeopleFavPlaces from './ResultsPeopleFavPlaces';
import ResultsPeopleFav from './ResultsPeopleFav'
import './People.css';

//Variables for styling
const cardStyle = "card-columns";
const panelStyle = "container pb-5 single";

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      selectedUser: "",
      places: [],
      products: [],
      clicked: "",
      userFavPhoto: "",
      userFavName: "",
      userFavNickname: "",
      style: cardStyle
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.getSelectedFavorites = this.getSelectedFavorites.bind(this);
  }

  componentDidMount(){
    this.loadUsers();
  }

  reset(){
    window.location.reload();
  }

  loadUsers(){
    console.log("3: load users function");
    API.getUsers()
      .then(res => this.setState({
        users: res.data
      }))
      .catch(err => console.log(err));
  } 

  handleChange(event) {
  this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderUsers() {
    if(!this.state.clicked){

      return (
        <Container width={cardStyle}>
          {this.allUsers()}
        </Container>
      );

    } else {            
      return (
        <Container width={panelStyle}>
          {this.singleUser()}
        </Container>
      );
    }
  }

  allUsers() {
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

  singleUser() {
        return (
        <ResultsPeopleFav 
          name={this.state.userFavName}
          photo={this.state.userFavPhoto}
          nickname={this.state.userFavNickname}
          placeCount={this.state.places.length}
          productCount={this.state.products.length}
          reset={this.reset}
        />
      );  
  }


  getSelectedFavorites(selectedUser){
  console.log("User Id " + selectedUser.user_id);
  API.getFavorites(selectedUser.user_id)
    .then(res => this.setState({
      places: res.data.places,
      products: res.data.products,
      clicked: "yes",
      userFavName: selectedUser.name,
      userFavNickname: selectedUser.nickname,
      userFavPhoto: selectedUser.photo
    }))
    .catch(err => console.log(err));
  }

  renderUserFavProducts(){
    if(this.state.products.length){
      return (
        <Container width="container">
          <h4 className="text-center mb-4">{this.state.userFavName}'s Favorite Products</h4>
          <div className="card-columns">
          {this.addUserProducts()}
          </div>
        </Container>
      );
    }
  }

  addUserProducts() {
       return this.state.products.map((products, i) => {
        return (
          <ResultsPeopleFavProducts
          name={products.name}
          category={products.category}
          key={i}
          upc={products.product_id}
          photo={products.image}
          comments={products.user_comment}
          user={products.user_nickname}
          />
        );
      });   
  }

  renderUserFavPlaces() {
    if(this.state.places.length){
      return (
        <Container width="container">
          <h4 className="text-center mb-4">{this.state.userFavName}'s Favorite Places</h4>
          <div className="card-columns">
          {this.addUserPlaces()}
          </div>
        </Container>
      );
    }
  } 


  addUserPlaces() {
       return this.state.places.map((places, i) => {
        return (
          <ResultsPeopleFavPlaces 
            name={places.name}
            photo={places.image} 
            key={i}
            city={places.city}
            address={places.address}
            comments={places.user_comment}
            user={places.user_nickname}
          />
        );        
      });   
  }   

  render() {

    return (

        <div>
            <MainJumbo
              heading={"The Lit List Community"}
              lead={"Explore the favorites of other community members."}
            />
            <NavBar 
              currentView={"people"}
              {...this.props}
            />

            <Container className="container">
            <h4 className="text-center mb-4">Favorite Members</h4>
            
                {this.renderUsers()}             

                {this.renderUserFavPlaces()}           

                {this.renderUserFavProducts()}           
                           
            </Container>      
        </div>

    );
  }
}

export default People;