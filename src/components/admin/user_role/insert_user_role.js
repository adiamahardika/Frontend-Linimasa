import React, { Component } from "react";
import { connect } from "react-redux";
import { insertUserRole } from "../../redux/action/user_role";
import { withRouter } from "react-router-dom";
import { routes_admin } from "../../helpers/routes.json";
import { button } from "../../helpers/class_name.json";
class InsertUserRole extends Component {
  state = {
    user_role_name: "",
  };
  onInsertUserRole = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  insertUserRole = async (event) => {
    event.preventDefault();
    await this.props.dispatch(insertUserRole(this.state));
    this.props.history.push(routes_admin.admin + routes_admin.user_role);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.user_role_name !== "") {
        return (
          <button
            type="submit"
            className={button.primary}
            onClick={this.insertUserRole}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button type="submit" className={button.disabled} disabled>
            Submit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertUserRole"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalInsertUserRoleTitle">
                  Insert New User Role
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
                        User Role:{" "}
                      </label>
                      <input
                        name="user_role_name"
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        onChange={this.onInsertUserRole}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={button["outline-primary"]}
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
export default withRouter(connect()(InsertUserRole));
