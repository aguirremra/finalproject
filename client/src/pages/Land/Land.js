import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import './Land.css';

class Land extends Component {

  render() {

    return (

        <div className="jumbotron mt-5">
          <Container width="container">
            <h1 className="display-4">Welcome to LiT List!</h1>
            <h2>Landing Page</h2>
            <p className="lead">This is the landing page for those who havent' signed up or logged in yet.</p>
          </Container>
        </div>
      
    );
  }
}

export default Land;