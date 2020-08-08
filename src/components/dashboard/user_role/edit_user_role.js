import React, { Component } from "react";
import { connect } from "react-redux";
import { editUserRole } from "../../redux/action/user_role";
import { withRouter } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
import "../../css/components/button.css";
class EditUserRole extends Component {
  state = {
    user_role_name: "",
  };
  componentWillReceiveProps({ user_role }) {
    this.setState({
      user_role_name: user_role.user_role_name,
    });
  }
  onEditUserRole = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  editUserRole = async (event) => {
    event.preventDefault();
    const id = this.props.user_role.id;
    const data = this.state;
    await this.props.dispatch(editUserRole(data, id));
    this.props.history.push(routes.user_role);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.user_role_name !== "") {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            onClick={this.editUserRole}
            data-dismiss="modal"
          >
            Edit
          </button>
        );
      } else {
        return (
          <button
            type="submit"
            className="btn modal-btn-submit"
            data-dismiss="modal"
            disabled
          >
            Edit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalEditUserRole"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalEditUserRoleTitle">
                  Edit User Role
                </h5>
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
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <div>
                      <label
                        htmlFor="validationCustom01"
                        className="col-form-label"
                      >
                        User Role Name:{" "}
                      </label>
                      <input
                        name="user_role_name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={this.onEditUserRole}
                        value={this.state.user_role_name}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn modal-btn-close"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(connect()(EditUserRole));
