import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/admin_layout/layout.css";
import "../../css/admin_layout/sidebar.css"
import { Link } from "react-router-dom";
import { routes } from '../../helpers/routes.json'
class Sidebar extends Component {
  render() {
    return (
      <div className="container-sidebar">
        <div className="sidebar-menu">
          Dashboard
        </div>
        <div
          className="sidebar-menu"
          type="button"
          data-toggle="collapse"
          data-target="#collapseMenuManage"
        >
          Management
        </div>
        <div className="collapse sidebar" id="collapseMenuManage">
            <ul>
              <li type="button" className="management-list">
                <Link to={routes.admin + routes.ads}>Ads</Link>
              </li>
              <li type="button" className="management-list">
                <Link to={routes.admin + routes.commentar}>Commentar</Link>
              </li>
              <li type="button" className="management-list">
                <Link to="#">News</Link>
              </li>
              <li type="button" className="management-list">
                <Link to={routes.admin + routes.news_category}>News Category</Link>
              </li>
              <li type="button" className="management-list">
                <Link to={routes.admin + routes.user_role}>User Role</Link>
              </li>
              <li type="button" className="management-list">
                <Link to={routes.admin + routes.video_category}>Video Category</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
