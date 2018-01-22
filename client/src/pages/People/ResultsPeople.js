import React, { Component } from 'react';
import "./People.css";

class ResultsPeople extends Component {

// saveToFavorites(event) {
// 	event.preventDefault();
// 	alert("This item will be saved to your favorites.");
// }
  
  render() {
    return (
    	<div className="col-4">
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text">{this.props.nickname}</p>
			    <p className="card-text">{this.props.user_id}</p>			    
			    <button id={this.props.itemId} onClick={() => this.props.getFavorites(this.props)}className="btn btn-primary">view favorites</button>
			  </div>
			</div>
    	</div>
    );
  }

};

export default ResultsPeople;