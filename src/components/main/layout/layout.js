import React from "react";
import Top from "./top";
import Navbar from "../../admin/layout/navbar";
import Side from "./side"
import "../../css/main/layout/layout.css"
const Layout = (props) => {
  return (
    <div className="layout">
      <Top />
      <Navbar />
      <div className="container layout">
      <Side/>
      <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Layout;
