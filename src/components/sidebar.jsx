import React from "react";
import "./sidebar.css";
import { Link } from "react-router";
const Sidebar = ({ show, HandleClick }) => {
  return (
    <div className="sidebar">
      <h3 onClick={HandleClick}>sidebar</h3>
      <aside className={`aside-${show ? "visible" : "hidden"}`}>
        <ul className="sidebarul">
          <Link className="No-underline" to="preview">
            <li style={{ textDecoration: "none" }}>preview</li>
          </Link>
          <Link className="No-underline" to="downloadaspdf">
            <li>download as pdf</li>
          </Link>
          <Link className="No-underline" to="search">
            <li>search</li>
          </Link>
          <Link className="No-underline" to="/editing">
            <li>edit input</li>
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
