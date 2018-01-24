import React, { Component } from 'react';

class commentModal extends Component {
  
saveToFavorites(event) {
  event.preventDefault();
  alert("This item will be saved to your favorites.");
};

  render() {
    return(
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add to LiTLiST</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-4">
              <div className="card mb-5">
              <img className="card-img-top" src={this.props.image} alt="product image" title="product image"/>
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.brand}</p>
                <p className="card-text">price: {this.props.price}</p>
              </div>
              </div>  
              </div>
            </div>
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">With textarea</span>
            </div>
            <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" id={this.props.itemId} onClick={this.saveToFavorites.bind(this)} className="btn btn-primary">add to favorites</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )};
  //render

};
//commentModal

export default commentModal;