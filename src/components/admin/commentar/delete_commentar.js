import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCommentar } from "../../redux/action/commentar";
import { routes_admin } from "../../helpers/routes.json";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json"
class DeleteCommentar extends Component {
  deleteCommentar = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteCommentar(this.props.commentar.id));
    this.props.history.push(routes_admin.admin + routes_admin.commentar);
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
                <div className={text.h2}>Delete Commentar</div>
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
                <div className={text.p2}>Apakah anda yakin akan menghapus komentar ini?</div>
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
