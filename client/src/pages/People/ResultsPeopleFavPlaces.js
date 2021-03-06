import React, { Component } from 'react';
import "./People.css";

class ResultsPeopleFavPlaces extends Component {
  
  render() {
    return (
    	<div className="card">
			  <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyAqSFQDNV7ckbcLxHbzJV1EEabAqlkq8h0&photoreference=" + this.props.photo} alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">{this.props.address}</p>	
			    <p className="card-text text-info">{this.props.user} - "{this.props.comments}"</p>				    		    
			  </div>
			</div>
    );
  }

};

export default ResultsPeopleFavPlaces;