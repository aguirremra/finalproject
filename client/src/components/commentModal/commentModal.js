import React, { Component } from 'react';

class commentModal extends Component {
  
saveToFavorites(event) {
  event.preventDefault();
  alert("This item will be saved to your favorites.");
};

  render() {
    return(
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add to LiTLiST</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="col-4">
              <div className="card mb-5">
              <img className="card-img-top" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k&photoreference=" + this.props.photo} alt="Placeholder image" title="Placeholder image"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">rating: {this.props.rating}</p>
                <p className="card-text">{this.props.address}</p>
              </div>
              </div>  
              </div>
            </div>
            <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">With textarea</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <div class="modal-footer">
              <a href="#" id={this.props.itemId} onClick={this.saveToFavorites.bind(this)}className="btn btn-primary">add to favorites</a>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )};
  //render

};
//commentModal

export default commentModal;