import React from "react";
import "../../css/admin_layout/layout.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const AdminLayout = (props) => {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};
export default AdminLayout;
