import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteVideo } from "../../redux/action/video";
import { withRouter } from "react-router";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
class DeleteVideo extends Component {
  deleteVideo = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteVideo(this.props.video.id));
    this.props.history.push(routes_admin.admin + routes_admin.video);
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
                <div className={text.h2}>Hapus Video</div>
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
                <div className={text.p2}>
                  Anda yakin akan menghapus video ini?
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={button["outline-primary"]}
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={button.danger}
                  onClick={this.deleteVideo}
                  data-dismiss="modal"
                >
                  Submit
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
