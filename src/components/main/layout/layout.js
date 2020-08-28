import React from "react";
import Top from "./top";
import Navbar from "../../main/layout/navbar";
import Side from "./side"
import Footer from "./footer"
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
      <Footer/>
    </div>
  );
};
export default Layout;
