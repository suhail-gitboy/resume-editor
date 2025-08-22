import React from "react";
import Defaultheader from "../Defaultheader";
import Footer from "../footer";
import { Outlet } from "react-router";
import "./layout.css";
const Layout = () => {
  return (
    <div>
      <div className="header">
        <Defaultheader />
      </div>
      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
