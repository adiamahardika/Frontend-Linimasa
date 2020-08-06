import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "../../css/layout_dashboard/layout.css"
import "../../css/layout_dashboard/navbar.css"
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
