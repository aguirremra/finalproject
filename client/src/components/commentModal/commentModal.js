import React, { Component } from 'react';

class CommentModal extends Component {

  render() {
    console.log('render commentModal');
    return(
      <div className="modal fade show" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.props.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Add to LiTLiST</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <div className="card mb-5">
                    <img className="card-img-top" src={this.props.image} alt="product image" title="product image"/>
                    <div className="card-body">
                      <h5 className="card-title">{this.props.name}</h5>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Enter Comments: </span>
                </div>
                <textarea name="comment" className="form-control" aria-label="Enter Comments" onChange={this.props.updateComment} value={this.props.comment}></textarea>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary"><i className="fas fa-heart"></i> Lite it up</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal"><i className="fas fa-ban"></i> Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )};
  //render

};
//CommentModal

export default CommentModal;