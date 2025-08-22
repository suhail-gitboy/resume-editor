import React from "react";
import "./cvresume.css";
import { Link } from "react-router";
const Cvresume = ({ img }) => {
  return (
    <Link to="editing" style={{ background: "#242424" }}>
      <img src={img} alt="" />
    </Link>
  );
};

export default Cvresume;
