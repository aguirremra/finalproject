import React, { Component } from 'react';

class ApiResultsPlaces extends Component {

  render() {
    return (
      <div className="card">
        <img className="card-img-top img-fluid" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k&photoreference=" + this.props.photo} alt={this.props.name} title={this.props.name}/>
        <div className="card-body">
          <div className="entry-category">
            <a href="https://#" className="post-category category-design">{this.props.types[0]}</a>
          </div>
        <h4 className="card-title">{this.props.name}</h4>
        <p className="card-text">{this.props.address}</p>
        <p className="card-text"><strong>Rating:</strong> {this.props.rating}</p>
        <p className="card-text"><strong>City:</strong> {this.props.city}</p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-warning" onClick={(e) => { this.props.getPlace(this.props); }}>
          <i id={this.props.itemId} className="fas fa-heart"></i> Lite it Up</button>
        </div>
      </div>
    );
  }
};

export default ApiResultsPlaces;