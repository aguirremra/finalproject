import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import Search from '../ApiSearch';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import './Profile.css';

class Profile extends Component {
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

  render() {
    const { profile } = this.state;
    return (
      <div>
          <NavBar 
            currentView={"profile"} 
            {...this.props}
          />
          <MainJumbo {...this.props}
            heading={`${profile.given_name}'s Lit List`}
            lead={"Search for new products or places to add to your list. "}
          />

          <Container width="container-fluid">

 
            <Search {...this.props}/>

            <hr className="mt-5 mb-5"/>
    
   
            <h3 className="text-center"><small>Your Current List</small></h3>

            



          </Container>

      </div>   


    );
  }
}

export default Profile;
