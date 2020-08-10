import React, { Component } from "react";
import "../../css/admin_layout/layout.css";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../helpers/routes.json";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Routes from "../../../routes";
class Admin extends Component {
  getRoutes = (Routes) => {
    return Routes.map((item, key) => {
      if (item.layout === routes.admin) {
        return (
          <Route
            path={item.layout + item.path}
            render={item => (<item.component {...item} />)}
            key={key}
          />
        );
      }
    });
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Switch>{this.getRoutes(Routes)}</Switch>
        </div>
      </div>
    );
  }
}
export default Admin;
