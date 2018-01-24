import React, { Component } from 'react';
import API from '../../providers/litlist_provider';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import ResultsPeople from './ResultsPeople';
import './People.css';

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      selectedUser: "",
      resultsArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.getSelectedFavorites = this.getSelectedFavorites.bind(this);
  }
  componentWillMount(){
    console.log("1: component will mount");
    this.loadUsers();
  }

  loadUsers(){
    console.log("3: load users function");
    API.getUsers()
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  } 

  handleChange(event) {
  this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderUsers() {
    console.log("4");
    console.log(this.state.users);
    return this.state.users.map((user, i) => {
      console.log("5: map user");
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

        <div>
            <MainJumbo
              heading={"The Lit List Community"}
              lead={"Explore the favorites of other community members."}
            />
            <NavBar 
              currentView={"people"} 
              {...this.props}
            />

            <Container width="container">

            <hr className="mt-5 mt-5"/>
             
                    {this.renderUsers()}       
             

            </Container>      
        </div>

    );
  }
}

export default People;