import React from "react";
import "./inputtwo.css";
const Inputtwo = ({ resumedata, Handlechange }) => {

  return (
    <div className="inputmain">
      <label htmlFor="">company</label>
      <input
        type="text"
        name="company"
        placeholder="enter company"
        value={resumedata.experience.company}
        onChange={Handlechange}
      />
      <label htmlFor="">role</label>
      <input
        type="text"
        placeholder="enter role"
        name="role"
        onChange={Handlechange}
        value={resumedata.experience.role}
      />
      <label htmlFor="">duration</label>
      <input
        type="text"
        placeholder="enter duration"
        name="duration"
        onChange={Handlechange}
        value={resumedata.experience.duration}
      />
    </div>
  );
};

export default Inputtwo;
