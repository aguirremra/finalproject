import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';

class Land extends Component {

  render() {

    return (

    
        <MainJumbo
          heading={"Welcome to Lit List!"}
          lead={"If you're new to lit list, signing up today is easy! Find interesting places and products."}
        />


      
    );
  }
}

export default Land;