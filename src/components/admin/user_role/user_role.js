import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUserRole, readAllUserRole } from "../../redux/action/user_role";
import { routes_admin } from "../../helpers/routes.json";
import { button, text } from "../../helpers/class_name.json";
import UserRoleList from "./user_role_list";
import InsertUserRole from "./insert_user_role";
import EditUserRole from "./edit_user_role";
import DeleteUserRole from "./delete_user_role";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/user_role.css";
import "../../css/components/text.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
class AdminUserRole extends Component {
  state = {
    selectEditUserRole: [],
    selectDeleteUserRole: [],
  };
  componentDidMount() {
    this.props.dispatch(readAllUserRole());
  }
  onSelectEditUserRole = (user_role) => {
    this.setState({
      selectEditUserRole: user_role,
    });
  };
  onSelectDeleteUserRole = (user_role) => {
    this.setState({
      selectDeleteUserRole: user_role,
    });
  };
  onSearchUserRole = (event) => {
    const user_role_name = event.target.value;
    if (user_role_name !== "") {
      this.props.history.push(
        `${
          routes_admin.admin + routes_admin.user_role
        }/?user_role_name=${user_role_name}`
      );
    } else {
      this.props.history.push(routes_admin.admin + routes_admin.user_role);
    }
    this.props.dispatch(readUserRole(user_role_name));
  };
  render() {
    const { user_role, loading } = this.props;
    const listUserRole =
      user_role &&
      user_role.map((item, index) => {
        return (
          <UserRoleList
            key={item.id}
            item={item}
            index={index}
            onSelectEditUserRole={this.onSelectEditUserRole}
            onSelectDeleteUserRole={this.onSelectDeleteUserRole}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className={text.h1}>User Role</div>
        <div className="form admin">
          <button
            type="button"
            className={button.primary}
            data-toggle="modal"
            data-target="#modalInsertUserRole"
          >
            Tulis User Role
          </button>
          <input
            className="form-control search paragraph-3"
            type="search"
            placeholder="Search User Role"
            onChange={this.onSearchUserRole}
          />
        </div>
        <div className="admin-table user-role">
          <div className="paragraph-1 number-column">No</div>
          <div className={text.p1}>Manage</div>
          <div className={text.p1}>Name</div>
          <div className={text.p1}>Date Created</div>
          <div className={text.p1}>Date Updated</div>
          {listUserRole}
        </div>
        <InsertUserRole />
        <EditUserRole user_role={this.state.selectEditUserRole} />
        <DeleteUserRole user_role={this.state.selectDeleteUserRole} />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user_role: state.user_role.user_role,
    loading: state.user_role.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminUserRole));
