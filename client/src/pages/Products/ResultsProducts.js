import React, { Component } from 'react';
import "./Products.css";

class ResultsProducts extends Component {

saveToFavorites(event) {
	event.preventDefault();
	alert("This item will be saved to your favorites.");
}
  
  render() {
    return (
    	<div className="col-4">
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.img} alt="image" title="image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.brand}</h5>
			    <p className="card-text">{this.props.title}</p>
			    <p className="card-text">category: {this.props.category} price: {this.props.price}</p>
			    <p className="card-text">UPC: {this.props.upc}</p>
			    <a href={this.props.purchase_link} className="btn btn-primary" target="_blank">buy now!</a>
			    <a href="#" id={this.props.itemId} onClick={this.saveToFavorites.bind(this)} className="btn btn-primary">add to favorites</a>
			  </div>
			</div>
    	</div>
    );
  }

};

export default ResultsProducts;