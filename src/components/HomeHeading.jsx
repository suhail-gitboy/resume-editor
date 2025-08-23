import React from "react";
import { Link } from "react-router";
import "./homeheading.css";
const HomeHeading = () => {
  return (
    <div className="main">
      <div className="h1">
        <a style={{ textDecoration: "none" }} href="#features">
          <h2 >
            Craft you resume
            <br />
            in minutes
            <i class="fa-sharp-duotone fa-solid fa-rocket"></i>
          </h2>
        </a>
      </div>
      <div className="button">
        <Link to="editingpage">
          <button> select your type</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeading;
