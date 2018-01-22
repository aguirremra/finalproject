import React, { Component } from 'react';
import "./ProductsFav.css";

class ResultsProductsFav extends Component {

saveToFavorites(event) {
	event.preventDefault();
	alert("This item will be saved to your favorites.");
}
  
  render() {
    return (
    	<div className="col-4">
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">category: {this.props.category}</p>
			    <p className="card-text">{this.props.upc}</p>
			    <button id={this.props.itemId} onClick={this.saveToFavorites.bind(this)}className="btn btn-primary">add to favorites</button>
			  </div>
			</div>
    	</div>
    );
  }

};

export default ResultsProductsFav;