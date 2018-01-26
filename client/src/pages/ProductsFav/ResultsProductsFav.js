import React, { Component } from 'react';
import "./ProductsFav.css";

class ResultsProductsFav extends Component {
  
  render() {
    return (
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} />
			  <div className="card-body">
				<div className="entry-category">
            <a href="https://#" className="post-category category-design">{this.props.category}</a>
          </div>
			    <h5 className="card-title">{this.props.name}</h5>
			    <p className="card-text"><strong>UPC:</strong> {this.props.upc}</p>
			  </div>
			</div>
    );
  }

};

export default ResultsProductsFav;