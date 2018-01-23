import React, { Component } from 'react';

class ApiResultsProducts extends Component {

  
  render() {
    return (

        <div className="card">
          <img className="card-img-top img-fluid" src={this.props.img} alt="Card image cap"/>
          <div className="card-body">
            <div className="entry-category">
              <a href="https://#" className="post-category category-design">Place Category Here</a>
            </div>
            <h4 className="card-title">{this.props.brand}</h4>
            <p className="card-text">{this.props.title}</p>
            <p className="card-text">category: {this.props.category} price: {this.props.price}</p>
          </div>
          <div className="card-footer text-center">
            <a href={this.props.purchase_link} target="_blank" className="btn btn-primary">
              <i className="fas fa-cart-plus"></i>Buy Now</a>
            <button type="button" 
                    className="btn btn-warning"
                    onClick={(e) => { this.props.getProduct(this.props); }}>
              <i id={this.props.itemId} className="fas fa-heart"></i>Add to LitList</button>
          </div>
        </div>

    );
  }

};

export default ApiResultsProducts;