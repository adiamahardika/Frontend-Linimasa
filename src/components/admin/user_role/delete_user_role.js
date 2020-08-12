import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUserRole } from "../../redux/action/user_role";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router";
class DeleteUserRole extends Component {
  deleteUserRole = async (event) => {
    event.preventDefault();
    await this.props.dispatch(deleteUserRole(this.props.user_role.id));
    this.props.history.push(routes.admin + routes.user_role);
  };
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="deleteModalUserRole"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete User Role</h5>
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
                <p>Are you sure want to delete this user role?</p>
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
                  onClick={this.deleteUserRole}
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
export default withRouter(connect()(DeleteUserRole));
