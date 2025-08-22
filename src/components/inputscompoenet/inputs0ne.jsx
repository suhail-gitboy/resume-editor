import React from "react";
import "./inputone.css";
const Inputsone = ({ Handlechange, resumedata }) => {
  return (
    <div className="inputmain">
      <label htmlFor="">name</label>
      <input
        name="name"
        type="text"
        placeholder="enter your name"
        value={resumedata.personalInfo.name}
        onChange={Handlechange}
      />
      <label htmlFor="">email</label>
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        value={resumedata.personalInfo.email}
        onChange={Handlechange}
      />
      <label htmlFor="">phone</label>
      <input
        name="phone"
        type="text"
        placeholder="enter your phone 
    "
        value={resumedata.personalInfo.phone}
        onChange={Handlechange}
      />
      <label htmlFor="">phone</label>
      <input
        name="ambition"
        type="text"
        placeholder=" ambition more than 30 words
    "
        value={resumedata.personalInfo.ambition}
        onChange={Handlechange}
      />
    </div>

  );
};

export default Inputsone;
