import React from "react";
import "./Boxdetail.css";
import { Link } from "react-router";
const Boxdetails = ({ details, type }) => {
  return (
    <div className="f1">
      <div className="f2">
        <h3>{type}</h3>
        <p style={{ color: "#5d5c5cff" }}>{details}</p>
        <Link to="/editing">make {type}</Link>
      </div>
    </div>
  );
};

export default Boxdetails;
