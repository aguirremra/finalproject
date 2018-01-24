import React, { Component } from 'react';

class ApiResultsProducts extends Component {

  render() {
    return (
      <div className="card">
        <img className="card-img-top img-fluid" src={this.props.img} alt="Card image cap"/>
        <div className="card-body">
          <div className="entry-category">
            <a href="https://#" className="post-category category-design">{this.props.category}</a>
          </div>
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">Brand: {this.props.brand}</p>
          <p className="card-text">Price: {this.props.price}</p>
        </div>
        <div className="card-footer text-center">
          <a href={this.props.purchase_link} target="_blank" className="btn btn-primary">
          <i className="fas fa-info-circle"></i> More Info</a>
          <button type="button" 
                  className="btn btn-warning"
                  onClick={(e) => { this.props.getProduct(this.props); }}>
          <i id={this.props.itemId} className="fas fa-heart"></i> Lite it Up</button>
        </div>
      </div>
    );
  }

};

export default ApiResultsProducts;