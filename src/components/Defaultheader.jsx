import React, { useState } from "react";
import "./Defualtheader.css";
import Dropdownitem from "./Dropdownitem";
import Imgs from "./../assets/cv.png";
import Userpng from "./../assets/user.png";
import { Link } from "react-router";
import Navbar from "./nav";
const Defaultheader = () => {
  const [dropping, Setdropping] = useState(false);

  return (
    <div className="headername">
      <h1>AI Resume Builder</h1>
      <Navbar />
      <div className="selectdropdown">
        <label htmlFor="theme" onClick={() => Setdropping(!dropping)}>
          Features
          {!dropping ? (
            <i class="fa-solid fa-arrow-down"></i>
          ) : (
            <i class="fa-solid fa-arrow-up"></i>
          )}
        </label>
      </div>
      <div className={`dropdown-menu${dropping ? "active" : "non-active"}`}>
        <ul>
          <Dropdownitem img={Userpng} user="user-suhail" />
          <Dropdownitem img={Imgs} user="edit resume" />
        </ul>
      </div>
    </div>
  );
};

export default Defaultheader;
