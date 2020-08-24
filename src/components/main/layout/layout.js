import React from "react";
import Top from "./top";
import Navbar from "../../admin/layout/navbar";
const Layout = (props) => {
  return (
    <div>
      <Top />
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;
