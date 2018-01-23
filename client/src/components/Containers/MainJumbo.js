import React, { Component } from 'react';
import Container from './Container';


import './MainJumbo.css';

class MainJumbo extends Component {

  render() {

    return (

          <div className="container text-center mt-5 mb-3">
            <h1 className="display-4">{this.props.heading}</h1>
            <p className="lead">{this.props.lead}</p>
          </div>
      
    );
  }
}

export default MainJumbo;
