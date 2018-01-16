import React, { Component } from 'react';
import Container from '../Containers/Container';

class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Container width="container">
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarText">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <a className="nav-link" href="/home">Home </a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/people">People</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/places">Places</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="/products">Products</a>
			      </li>			      
			    </ul>
			    <span className="navbar-text">
			      Search for stuff. Save your favorites
			    </span>
			  </div>
			 </Container>
			</nav>		
			);
	}//render



}//Navbar

export default Navbar;