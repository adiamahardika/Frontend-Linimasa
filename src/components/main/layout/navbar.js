import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/main/layout/layout.css";
import "../../css/main/layout/navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg container-main-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="main-navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Hype
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Peristiwa
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Finance
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="navbar dropdown-item" to="#">
                  Business
                </Link>
                <Link className="navbar dropdown-item" to="#">
                  Economy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Humaniora
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Ragam
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Techno
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Entertainment
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Lifestyle
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="navbar dropdown-item" to="#">
                  Food
                </Link>
                <Link className="navbar dropdown-item" to="#">
                  Sport
                </Link>
                <Link className="navbar dropdown-item" to="#">
                  Health
                </Link>
                <Link className="navbar dropdown-item" to="#">
                  Outgoing
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(connect()(Navbar));
