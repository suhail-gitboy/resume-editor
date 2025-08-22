import React from "react";
import "./navbar.css";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        <NavLink style={{ textDecoration: "none" }} to="editingpage">
          <li>Resume builder</li>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <li>home</li>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/dashboard">
          <li>History</li>
        </NavLink>


      </ul>
    </nav>
  );
};

export default Navbar;
