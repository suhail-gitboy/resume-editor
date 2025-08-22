import React, { useEffect, useState } from "react";
import "./Features.css";
import Imgedit from "./imgedit";
import Colorimg from "./../assets/color.png";
import Cvpng from "./../assets/cv.png";
import Boxdetails from "./Boxdetails";
const Features = () => {
  const [data, Setdata] = useState([]);
  const [ispending, Setispending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("/resumetype.json")
        .then((res) => res.json())
        .then((data) => {
          Setdata(data);
          Setispending(false);
        }, 1000);
    });
  }, []);
  console.log(data);

  return (
    <div className="features" id="features">
      <h1>Types of Resumes</h1>
      {ispending && <h3 style={{}}>Loading...</h3>}
      <div className="detailsdiv">
        {data.map((deta, index) => {
          return (
            <Boxdetails key={index} details={deta.details} type={deta.type} />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
