import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteVideo } from "../../redux/action/video";
import { withRouter } from "react-router";
import { routes } from "../../helpers/routes.json";
class DeleteVideo extends Component {
  deleteVideo = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteVideo(this.props.video.id));
    this.props.history.push(routes.admin + routes.video);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalVideo"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Video</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure want to delete this video?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn modal-btn-close"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn modal-btn-submit"
                  onClick={this.deleteVideo}
                  data-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(connect()(DeleteVideo));
