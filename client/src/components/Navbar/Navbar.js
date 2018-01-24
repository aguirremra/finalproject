import React, { Component } from 'react';
import Container from '../Containers/Container';
import './Navbar.css';

const styles = {
	navDiv: {
		width: "fit-content",
		backgroundColor: "#f5f6f6",
		padding: 10,
		borderRadius: 10,
		border: "1px solid #d0d0d0"
	} 
}

class Navbar extends Component {
	goTo(route) {
    this.props.history.replace(`/${route}`)
  }

	render() {

		return(
		
			  <div id={this.props.currentView} className="container text-center mt-5 mb-5" style={styles.navDiv}>
			    <button onClick={this.goTo.bind(this, 'home')} className="btn home"> Home</button>
			    <button onClick={this.goTo.bind(this, 'people')} className="btn people"> Browse People</button>
			    <button onClick={this.goTo.bind(this, 'placesfav')} className="btn places"> Browse Places</button>
			    <button onClick={this.goTo.bind(this, 'productsfav')} className="btn products"> Browse Products</button>
			  </div>
		
			);
	}//render



}//Navbar

export default Navbar;