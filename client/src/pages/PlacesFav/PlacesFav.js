import React, { Component } from 'react';
import API from '../../providers/litlist_provider';
import ResultsPlaceFav from './ResultsPlaceFav';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import Container from '../../components/Containers/Container';

class PlacesFav extends Component {

  render() {

    return (

        <div>
        
            <MainJumbo
              heading={"The Places of Lit List"}
              lead={"Explore the places favorited by other community members."}
            />
            <NavBar 
              currentView={"places"} 
              {...this.props}
            />

            <Container width="container">

            <hr className="mt-5 mt-5"/>
              <div id="placeholderText" className="row">
                    List list places cards will appear here          
              </div>
            </Container> 

        </div>

    );
  }
}

export default PlacesFav;