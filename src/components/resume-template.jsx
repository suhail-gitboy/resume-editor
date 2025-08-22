import React from "react";
import "./resumetemplate.css";
import Cvresume from "./cvresume";
import Img from "./../assets/cv1.jpg";
import IMg2 from "./../assets/cv2.jpg";
const ResumeTemplate = () => {
  console.log("resummereacher");
  return (
    <div className="resumetemplate">
      <h3 style={{ color: "#ffffff" }}>
        pick a resume template and build <br />
        your resume in minutes!!
      </h3>
      <div className="resume">
        <Cvresume img={Img} />
        <Cvresume img={IMg2} />
        <Cvresume img={Img} />
        <Cvresume img={IMg2} />
      </div>
    </div>
  );
};

export default ResumeTemplate;
