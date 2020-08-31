import React, { Component } from "react";
import { connect } from "react-redux";
import { editUserRole } from "../../redux/action/user_role";
import { withRouter } from "react-router-dom";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
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
    this.props.history.push(routes_admin.admin + routes_admin.user_role);
  };
  render() {
    const SubmitButton = () => {
      if (this.state.user_role_name !== "") {
        return (
          <button
            type="submit"
            className={button.primary}
            onClick={this.editUserRole}
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
          id="modalEditUserRole"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Edit User Role</div>
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
                      <label className={text.p1}>User Role Name:</label>
                      <input
                        name="user_role_name"
                        type="text"
                        className="form-control paragraph-2"
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
export default withRouter(connect()(EditUserRole));
