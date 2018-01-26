import React, { Component } from 'react';
import Container from '../../components/Containers/Container';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import './Home.css';

class Home extends Component {

  render() {

    return (

      <div>
        <MainJumbo
          heading={"Welcome to LitList!"}
          lead={"Add to your list, or explore LitList community favorites."}
        />
        <NavBar 
          currentView={"home"} 
          {...this.props}
        />
      </div>        
 
    );
  }
}

export default Home;
