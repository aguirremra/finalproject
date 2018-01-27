import React, { Component } from 'react';
import "./Profile.css";

class ResultsProfileFavProducts extends Component {
  
  render() {
    return (
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} />
			  <div className="card-body">
				<div className="entry-category">
					<p className="post-category category-design"> {this.props.category}</p>
				</div>
			    <h5 className="card-title">{this.props.name.substring(0, 75)}</h5>
			    <p className="card-text"><strong>UPC:</strong> {this.props.upc}</p>
			    <p className="card-text"><strong>Comments:</strong> {this.props.comments}</p>			    
			  </div>
			</div>
    );
  }

};

export default ResultsProfileFavProducts;