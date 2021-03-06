import React, { Component } from 'react';
import "./People.css";

class ResultsPeopleFavProducts extends Component {
  
  render() {
    return (
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name.substring(0, 75)}</h5>
			    <p className="card-text"><strong>Category:</strong> {this.props.category}</p>
			    <p className="card-text"><strong>UPC:</strong> {this.props.upc}</p>
			    <a target="_blank" href={this.props.url}> More Info</a>
			    <p className="card-text text-info">{this.props.user} - "{this.props.comments}"</p>	
			  </div>
			</div>
    );
  }

};

export default ResultsPeopleFavProducts;