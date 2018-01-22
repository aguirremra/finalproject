import React, { Component } from 'react';
import "./PlacesFav.css";

class ResultsPlaceFav extends Component {

saveToFavorites(event) {
	event.preventDefault();
	alert("This item will be saved to your favorites.");
}
  
  render() {
    return (
    	<div className="col-4">
	    	<div className="card mb-5">
			  <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k&photoreference=" + this.props.photo} alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">city: {this.props.city}</p>
			    <p className="card-text">{this.props.address}</p>			    
			  </div>
			</div>
    	</div>
    );
  }

};

export default ResultsPlaceFav;