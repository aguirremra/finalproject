import React, { Component } from 'react';
import "./People.css";

class ResultsPeople extends Component {
  
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="entry-category">
            <img className="circle avatar-icon" src={this.props.photo} alt={this.props.name} title={this.props.name}/>
          </div>
        <h4 className="card-title">{this.props.name}</h4>
        <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="card-footer text-center">
          <button type="button" 
                  className="btn btn-warning"
                  onClick={(e) => { this.props.getFavorites(this.props); }}>
          <i id={this.props.itemId} className="fas fa-heart"></i> View Favorites</button>
        </div>
      </div>
    );
  }

};

export default ResultsPeople;




