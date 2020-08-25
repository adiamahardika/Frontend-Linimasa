import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Top from "./layout/top";
import Navbar from "./layout/navbar";
import Side from "./layout/side";
import "../css/main/home.css";
import "../css/main/layout/layout.css";
class Home extends Component {
  render() {
    return (
      <div className="layout">
        <Top />
        <Navbar />
        <div className="container layout">
          <Side />
          <div className="home">Ini Home</div>
          <div className="home-horizontal">Ini home horizontal</div>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Home));
