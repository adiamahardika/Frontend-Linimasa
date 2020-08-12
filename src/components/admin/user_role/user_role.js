import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUserRole } from "../../redux/action/user_role";
import ItemUserRole from "./item_user_role";
import InsertUserRole from "./insert_user_role";
import EditUserRole from "./edit_user_role";
import DeleteUserRole from "./delete_user_role";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/admin/user_role.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
class AdminUserRole extends Component {
  state = {
    selectEditUserRole: [],
    selectDeleteUserRole: [],
  };
  componentDidMount() {
    this.props.dispatch(readUserRole());
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
  render() {
    const { user_role, loading } = this.props;
    const listUserRole =
      user_role &&
      user_role.map((item, index) => {
        return (
          <ItemUserRole
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
        <div className="admin-title">User Role</div>
        <div className="form admin">
          <button
            type="button"
            className="admin btn btn-add"
            data-toggle="modal"
            data-target="#modalInsertUserRole"
          >
            Add
          </button>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search User Role"
            onChange={this.onSearchNewsCategoryName}
            name="news_category_name"
          />
        </div>
        <div className="table-user-role">
          <div className="header-table-user-role">No</div>
          <div className="header-table-user-role">Manage</div>
          <div className="header-table-user-role">Name</div>
          <div className="header-table-user-role">Date Created</div>
          <div className="header-table-user-role">Date Updated</div>
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
