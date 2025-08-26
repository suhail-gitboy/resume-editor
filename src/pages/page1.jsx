import React from "react";
import HomeHeading from "../components/HomeHeading";
import Features from "../components/features";
import Defaultheader from "../components/Defaultheader";
import ResumeTemplate from "../components/resume-template";
import "./page1.css";
import Review from "../components/Review";
const Homepage = () => {
  return (
    <div className="page1">
      <header></header>
      <main>
        <HomeHeading />
        <Features />
        <ResumeTemplate />
        <Review />
      </main>

    </div>
  );
};

export default Homepage;
