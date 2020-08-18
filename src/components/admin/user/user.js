import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUser, readAllUser } from "../../redux/action/user";
import { routes } from "../../helpers/routes.json";
import { readAllUserRole } from "../../redux/action/user_role";
import UserList from "./user_list";
import DeleteUser from "./delete_user";
import AdminLayout from "../layout/admin_layout";
import FullPageLoader from "../../helpers/loading";
import "../../css/admin/user.css";
import "../../css/components/button.css";
import "../../css/components/title.css";
import "../../css/components/form.css";
import "../../css/components/table.css";
import "../../css/components/image.css";
import "../../css/components/icon.css";
class AdminUser extends Component {
  state = {
    selectDeleteUser: [],
  };
  data = {
    user_name: "",
    user_role: "",
  };
  componentDidMount() {
    this.props.dispatch(readAllUser());
    this.props.dispatch(readAllUserRole());
  }
  selectDeleteUser = (user) => {
    this.setState({
      selectDeleteUser: user,
    });
  };
  searchUser = (event) => {
    const user_name = event.target.value;
    this.data.user_name = user_name;
    this.propsHistoryPush();
  };
  filterUser = (event) => {
    const user_role = event;
    this.data.user_role = user_role;
    this.propsHistoryPush();
  };
  propsHistoryPush = () => {
    const data = this.data;
    let result = [];
    Object.keys(data).map((key) => {
      if (data[key] !== "") {
        return result.push(key + "=" + data[key]);
      } else {
        return "";
      }
    });
    if (result.length !== 0) {
      this.props.history.push(
        `${routes.admin + routes.user}/?${result.map((value) => {
          if (result.indexOf(value) === result.length - 1) {
            return value;
          } else {
            return value + "&";
          }
        })}`
      );
    } else {
      this.props.history.push(routes.admin + routes.user);
    }
    this.props.dispatch(readUser(this.data.user_name, this.data.user_role));
  };
  render() {
    const { user, loading, user_role } = this.props;
    const listAds =
      user &&
      user.map((item, index) => {
        return (
          <UserList
            key={item.id}
            item={item}
            index={index}
            selectDeleteUser={this.selectDeleteUser}
          />
        );
      });
    return (
      <AdminLayout>
        <FullPageLoader loading={loading} />
        <div className="admin-title">User</div>
        <div className="form admin">
          <div className="admin-icon dropdown">
            <ion-icon
              name="funnel"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div class="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => this.filterUser("")}
              >
                All
              </button>
              {user_role.map((user_role, index) => (
                <button
                  className="dropdown-item"
                  key={index}
                  onClick={() => this.filterUser(user_role.id)}
                >
                  {user_role.user_role_name}
                </button>
              ))}
            </div>
          </div>
          <input
            className="form-control admin-search"
            type="search"
            placeholder="Search User"
            onChange={this.searchUser}
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
        <DeleteUser user={this.state.selectDeleteUser} />
      </AdminLayout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.user.loading,
    user_role: state.user_role.user_role,
  };
};
export default withRouter(connect(mapStateToProps)(AdminUser));
