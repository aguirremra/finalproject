import React, { Component } from 'react';
import "./ResultsPlace.css";

class ResultsPlace extends Component {

saveToFavorites(event) {
	event.preventDefault();
	alert("This item will be saved to your favorites.");
}
  
  render() {
    return (
    	<div className="col-4">
	    	<div className="card mb-5">
			  <img className="card-img-top" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/230557/lincecum.png" alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">rating: {this.props.rating}</p>
			    <p className="card-text">{this.props.address}</p>
			    <a href="#" id={this.props.itemId} onClick={this.saveToFavorites.bind(this)}className="btn btn-primary">add to favorites</a>
			  </div>
			</div>
    	</div>

    );
  }

};

export default ResultsPlace;


