import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUserRole } from "../../redux/action/user_role";
import "../../css/admin_layout/layout.css";
import "../../css/components/button.css";
import "../../css/dashboard/user_role.css"
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import ItemUserRole from "./item_user_role";
import InsertUserRole from "./insert_user_role"
import EditUserRole from "./edit_user_role"
import DeleteUserRole from "./delete_user_role"
class DashboardUserRole extends Component {
  state = {
    selectEditUserRole: [],
    selectDeleteUserRole: []
  }
  componentDidMount() {
    this.props.dispatch(readUserRole());
  }
  onSelectEditUserRole = (user_role) => {
    this.setState({
      selectEditUserRole: user_role
    })
  }
  onSelectDeleteUserRole = (user_role) => {
    this.setState({
      selectDeleteUserRole: user_role
    })
  }
  render() {
    const { user_role } = this.props;
    console.log(user_role);
    const listUserRole =
      user_role &&
      user_role.map((item, index) => {
        return <ItemUserRole key={item.id} item={item} index={index} onSelectEditUserRole={this.onSelectEditUserRole} onSelectDeleteUserRole={this.onSelectDeleteUserRole}/>;
      });
    return (
      <div className="container">
        <Sidebar />
        <Navbar />
        <div className="container-user-role">
          <div className="title-user-role">User Role Table</div>
          <div className="form user-role">
            <button
              type="button"
              className="dashboard btn btn-add"
              data-toggle="modal"
              data-target="#modalInsertUserRole"
            >
              Add
            </button>
            <input
              className="form-control user-role"
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
        </div>
        <InsertUserRole/>
        <EditUserRole user_role={this.state.selectEditUserRole}/>
        <DeleteUserRole user_role={this.state.selectDeleteUserRole}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user_role: state.user_role.user_role,
  };
};
export default withRouter(connect(mapStateToProps)(DashboardUserRole));
