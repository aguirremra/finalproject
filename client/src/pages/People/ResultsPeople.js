import React, { Component } from 'react';
import "./People.css";

class ResultsPeople extends Component {
  
  render() {
    return (
      <div className="card-columns">
        <div className="filterDiv">

          <div className="card">
          <img className="card-img-top img-fluid" src={this.props.photo} alt="user image" title="user image"/>
            <div className="card-body">
              <h4 className="card-title">{this.props.name}</h4>
              {/*<p className="card-text">{this.props.user_id}</p>*/}
             <p className="card-text">Nickname: {this.props.nickname}</p>
            </div>
          <div className="card-footer text-center">
            <button id={this.props.itemId} onClick={() => this.props.getFavorites(this.props)} type="button" className="btn btn-warning">
              <i className="fas fa-heart mr-2"></i>view favorites</button>
          </div>
          </div>

        </div>
      </div>     	
    );
  }

};

export default ResultsPeople;




