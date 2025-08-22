import React from "react";

const Four = ({ resumedata, Handlechange }) => {

  return (
    <div className="inputmain">
      <label htmlFor="">skill1</label>
      <input
        type="text"
        name="skillone"
        placeholder="enter your name"
        value={resumedata.skill.skillone}
        onChange={Handlechange}
      />
      <label htmlFor="">skill2</label>
      <input
        type="text"
        name="skilltwo"
        placeholder="enter your email"
        value={resumedata.skill.skilltwo}
        onChange={Handlechange}
      />
      <label htmlFor="">skill3</label>
      <input
        type="text"
        name="skillthree"
        placeholder="enter your phone
    "
        value={resumedata.skill.skillthree}
        onChange={Handlechange}
      />
    </div>
  );
};

export default Four;
