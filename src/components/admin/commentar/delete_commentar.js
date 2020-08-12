import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCommentar } from "../../redux/action/commentar";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router";
class DeleteCommentar extends Component {
  deleteCommentar = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteCommentar(this.props.commentar.id));
    this.props.history.push(routes.admin + routes.commentar);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalCommentar"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Commentar</h5>
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
                <p>Are you sure want to delete this commentar?</p>
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
                  onClick={this.deleteCommentar}
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
export default withRouter(connect()(DeleteCommentar));
