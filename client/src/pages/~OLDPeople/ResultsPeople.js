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

        <div className="card">
          <img className="card-img-top img-fluid" src={this.props.photo} alt="user image" title="user image"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.nickname}</p>
            <p className="card-text">{this.props.user_id}</p>
          </div>
          <div className="card-footer text-center">
            <button id={this.props.itemId} oonClick={() => this.props.getFavorites(this.props)} type="button" className="btn btn-warning">
              <i className="fas fa-heart mr-2"></i>view favorites</button>
          </div>
        </div>    	
    );
  }

};

export default ResultsPeople;