import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUser } from "../../redux/action/user";
import UserList from "./user_list";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/user.css";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/image.css";
class AdminUser extends Component {
  componentDidMount() {
    this.props.dispatch(readUser());
  }
  render() {
    const { user, loading } = this.props;
    const listAds =
      user &&
      user.map((item, index) => {
        return <UserList key={item.id} item={item} index={index} />;
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">User</div>
        <div className="form admin">
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search User"
          />
        </div>
        <div className="admin-table user">
          <div className="header-admin-table number-column">No</div>
          <div className="header-admin-table">Manage</div>
          <div className="header-admin-table">Name</div>
          <div className="header-admin-table">Image</div>
          <div className="header-admin-table">Email</div>
          <div className="header-admin-table">Phone Number</div>
          <div className="header-admin-table">Role</div>
          <div className="header-admin-table">Points</div>
          <div className="header-admin-table">Date Created</div>
          <div className="header-admin-table">Date Updated</div>
          {listAds}
        </div>
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.user.loading,
  };
};
export default withRouter(connect(mapStateToProps)(AdminUser));
