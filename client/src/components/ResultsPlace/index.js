import React, { Component } from 'react';

class ResultsPlace extends Component {
  
  render() {
    return (
          <div id={this.props.itemId}>
            <h4>{this.props.address}</h4>
          </div> 

    );
  }

};

export default ResultsPlace;



