import React, { Component } from 'react';

class ResultsPlace extends Component {
  
  render() {
    return (
    	<div className="col-3">
	    	<div className="card">
			  <img className="card-img-top" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/230557/lincecum.png" alt="Placeholder image" title="Placeholder image"/>
			  <div className="card-body">
			    <h5 className="card-title">Card title</h5>
			    <p className="card-text">{this.props.address}</p>
			    <a href="#" id={this.props.itemId} className="btn btn-primary">add to favorites</a>
			  </div>
			</div>
    	</div>

    );
  }

};

export default ResultsPlace;



