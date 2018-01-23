import React, { Component } from 'react';

class ApiResultsPlaces extends Component {

  render() {
    return (

        <div className="card">
          <img className="card-img-top img-fluid" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k&photoreference=" + this.props.photo} alt={this.props.name} title={this.props.name}/>
          <div className="card-body">
            <div className="entry-category">
              <a href="https://#" className="post-category category-design">Place Category Here</a>
            </div>
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">Address: {this.props.address}. Rating: rating: {this.props.rating}</p>
          </div>
          <div className="card-footer text-center">
            <button id={this.props.itemId} onClick={() => this.props.getPlace(this.props)} type="button" className="btn btn-warning">
              <i className="fas fa-heart mr-2"></i>Add to LitList</button>
          </div>
        </div>





    );
  }

};

export default ApiResultsPlaces;