import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/layout_dashboard/layout.css"
import "../../css/layout_dashboard/sidebar.css"
import { Link } from "react-router-dom";
import { routes } from '../../helpers/routes.json'
class Sidebar extends Component {
  render() {
    return (
      <div className="container-sidebar">
        <div className="dashboard">
          Dashboard
        </div>
        <div
          className="management"
          type="button"
          data-toggle="collapse"
          data-target="#collapseMenuManage"
        >
          Management
        </div>
        <div className="collapse" id="collapseMenuManage">
            <ul>
              <li>
                <Link to={routes.ads}>Ads</Link>
              </li>
              <li>
                <Link to="#">Commentar</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to={routes.news_category}>News Category</Link>
              </li>
              <li>
                <Link to={routes.user_role}>User Role</Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
