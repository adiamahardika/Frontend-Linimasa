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
      <div>{props.children}</div>
      <Side/>
    </div>
  );
};
export default Layout;
