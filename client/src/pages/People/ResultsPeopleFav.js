import React, { Component } from 'react';
import "./People.css";

class ResultsPeopleFav extends Component {
  
  render() {
    return (
          <div className="container pb-5">
            <div className="card">
              <div className="row">
                <div className="col-sm px-4 py-2 ml-3">
                  <img className="circle avatar-icon" src={this.props.photo} alt={this.props.name} title={this.props.name}/>
                </div>
                <div className="col-sm">
                  <h5 className="card-title mt-3">{this.props.name}</h5>
                  <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm border-left text-center my-auto">
                    <h2 className="card-title score mt-3 counter-count">{this.props.productCount || '0'}</h2>
                    <p className="card-title">Lit Products</p>
                </div>
                <div className="col-sm mr-3 border-left text-center my-auto">
                  <h2 className="card-title mt-3 score counter-count">{this.props.placeCount || '0'}</h2>
                  <p className="card-title">Lit Places</p>
              </div>
              </div>
            </div>
          </div>
    );
  }

};

export default ResultsPeopleFav;