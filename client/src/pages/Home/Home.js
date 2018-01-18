import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import './Home.css';

class Home extends Component {

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
