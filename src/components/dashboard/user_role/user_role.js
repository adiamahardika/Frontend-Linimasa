import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { readUserRole } from "../../redux/action/user_role";
import "../../css/layout_dashboard/layout.css";
import "../../css/components/button.css";
import "../../css/dashboard/user_role.css"
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import ItemUserRole from "./item_user_role";
import InsertUserRole from "./insert_user_role"
class DashboardUserRole extends Component {
  componentDidMount() {
    this.props.dispatch(readUserRole());
  }
  render() {
    const { user_role } = this.props;
    console.log(user_role);
    const listUserRole =
      user_role &&
      user_role.map((item, index) => {
        return <ItemUserRole key={item.id} item={item} index={index} />;
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
