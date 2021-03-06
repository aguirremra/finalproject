import React, { Component } from 'react';
import "./ProductsFav.css";

class ResultsProductsFav extends Component {
  
  render() {
    return (
	    	<div className="card mb-5">
			  <img className="card-img-top" src={this.props.photo} />
			  <div className="card-body">
				<div className="entry-category">
            {this.props.category}
          </div>
			    <h5 className="card-title">{this.props.name.substring(0, 75)}</h5>
			    <p className="card-text"><strong>UPC:</strong> {this.props.upc}</p>
			    <a target="_blank" href={this.props.url}> More Info</a>
				  <p className="text-info">{this.props.username} - "{this.props.comments}"</p>			    
			  </div>
			</div>
    );
  }

};

export default ResultsProductsFav;