import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/dashboard/sidebar.css";
import "../../css/dashboard/layout.css";
import { Link } from "react-router-dom";
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
          <div className="card">
            <ul>
              <li>
                <Link to="#">Ads</Link>
              </li>
              <li>
                <Link to="#">Commentar</Link>
              </li>
              <li>
                <Link to="#">News</Link>
              </li>
              <li>
                <Link to="#">News Category</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
