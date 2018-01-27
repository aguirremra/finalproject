import React, { Component } from 'react';
import Container from '../Containers/Container';
import './Navbar.css';

class Navbar extends Component {
	goTo(route) {
    this.props.history.replace(`/${route}`)
  }

	render() {

		return(
		
			  <div id={this.props.currentView} className="container text-center mt-5 mb-5">
			    <button id="navBtnPeople" onClick={this.goTo.bind(this, 'people')} className="btn btn-light people mr-1"> Browse People</button>
			    <button id="navBtnPlaces" onClick={this.goTo.bind(this, 'placesfav')} className="btn btn-light places mr-1"> Browse Places</button>
			    <button id="navBtnProducts" onClick={this.goTo.bind(this, 'productsfav')} className="btn btn-light products"> Browse Products</button>
			  </div>
		
			);
	}//render



}//Navbar

export default Navbar;