import React from "react";

const Five = ({ Handlechange, resumedata }) => {
  return (
    <div className="inputmain">
      <label htmlFor="">hobbies</label>
      <input
        type="text"
        name="hobbyone"
        placeholder="enter your name"
        value={resumedata.hobbies.hobbyone}
        onChange={Handlechange}
      />
      <label htmlFor="">abilities</label>
      <input
        type="text"
        name="hobbytwo"
        placeholder="enter your email"
        value={resumedata.hobbies.hobbytwo}
        onChange={Handlechange}
      />
    </div>
  );
};

export default Five;
