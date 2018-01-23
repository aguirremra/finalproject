import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import API from '../../providers/litlist_provider';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);

        API.saveUser({
          sub: profile.sub,
          image: profile.picture,
          name: profile.name,
          nickname: profile.nickname
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

        <div className="jumbotron mt-5">
          <Container width="container">
            <h1 className="display-4">Welcome to LiT List!</h1>
            <h2>Home Page</h2>
            <p className="lead">This is the home page for those who have logged in.</p>
          </Container>
        </div>
      
    );
  }
}

export default Home;
