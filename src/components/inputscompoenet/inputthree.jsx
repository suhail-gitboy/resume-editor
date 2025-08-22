import React from "react";

const Inputthree = ({ resumedata, Handlechange }) => {
  return (
    <div className="inputmain">
      <label htmlFor="">school</label>
      <input
        type="text"
        name="school"
        value={resumedata.education.school}
        onChange={Handlechange}
      />
      <label htmlFor="">college</label>
      <input
        type="text"
        name="degree"
        value={resumedata.education.degree}
        onChange={Handlechange}
      />
      <label htmlFor="">year</label>
      <input
        name="duration"
        type="text"
        value={resumedata.education.duration}
        onChange={Handlechange}
      />
    </div>
  );
};

export default Inputthree;
