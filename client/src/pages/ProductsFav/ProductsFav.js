import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsProductsFav from './ResultsProductsFav';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import Container from '../../components/Containers/Container';

class ProductsFav extends Component {


  render() {

    return (

        <div>
            <MainJumbo
              heading={"The Products of Lit List"}
              lead={"Explore the products favorited by other community members."}
            />
            <NavBar 
              currentView={"products"} 
              {...this.props}
            />

            <hr className="mt-5 mt-5"/>

            <Container width="container">
              <div id="placeholderText" className="row">
                    Need to add Maria's code here          
              </div> 
            </Container>
                  
        </div>

    );
  }
}

export default ProductsFav;