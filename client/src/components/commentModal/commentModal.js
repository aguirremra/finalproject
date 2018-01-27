import React, { Component } from 'react';
import './commentModal.css';

class CommentModal extends Component {

  render() {
    console.log('render commentModal');
    return(
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabellive">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={this.props.handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Add to LitList</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="col-12">
                  <div className="card mb-3">
                    <img className="card-img-top-modal" src={this.props.image} />
                    <div className="card-body">
                      <h5 className="card-title">{this.props.name}</h5>
                    </div>
                  </div>  
                </div>
              </div>
              <div class="form-group px-3">
                <label for="exampleTextarea">Add a Comment</label>
                <textarea class="form-control" id="exampleTextarea" rows="3" onChange={this.props.updateComment} value={this.props.comment}></textarea>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-warning">Add to LitList</button>
                <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
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