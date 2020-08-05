import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/dashboard/navbar.css";
import "../../css/dashboard/layout.css";
class Navbar extends Component {
  render() {
    return (
      <div className="container-navbar">
          Ini adalah Navbar
      </div>
    );
  }
}
export default withRouter(connect()(Navbar));
