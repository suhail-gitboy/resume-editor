import React, { useState } from "react";
import "./inputone.css";
const Inputsone = ({ Handlechange, resumedata, Setinputdynamic }) => {


  const [Errormssge, Seterrormssge] = useState({});
  const Validate = () => {

    const Newerror = {}

    if (!resumedata.personalInfo.name) {
      Newerror.name = "name is required"
    } else if (resumedata.personalInfo.name.length < 3) {
      Newerror.name = "minimum three letters"
    }
    if (!resumedata.personalInfo.email) {
      Newerror.email = "email is required"
    } else if (!/\S+@\S+\.\S+$/.test(resumedata.personalInfo.email)) {
      Newerror.email = "invalid email"
    } if (!resumedata.personalInfo.ambition) {
      Newerror.ambition = "minimum 10 words"
    }

    Seterrormssge(Newerror)

    return Object.keys(Newerror).length === 0;

  }
  const Disable = Object.keys(Errormssge).length > 0

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (Validate()) {
      alert("personal Info successfully filled")
      Setinputdynamic("qualifications")
    }
  }

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
      {Errormssge.name && <p style={{ color: "red" }}>{Errormssge.name}</p>}
      <label htmlFor="">email</label>
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        value={resumedata.personalInfo.email}
        onChange={Handlechange}
      />
      {Errormssge.email && <p style={{ color: "red" }}>{Errormssge.email}</p>}
      <label htmlFor="">phone</label>
      <input
        name="phone"
        type="text"
        placeholder="enter your phone 
    "
        value={resumedata.personalInfo.phone}
        onChange={Handlechange}
      />
      <label htmlFor="">Ambitions</label>
      <input
        name="ambition"
        type="text"
        placeholder=" ambition more than 30 words
    "
        value={resumedata.personalInfo.ambition}
        onChange={Handlechange}
      />
      {Errormssge.ambition && <p style={{ color: "red" }}>{Errormssge.ambition}</p>}
      <button disabled={Disable} onClick={HandleSubmit} className="btnpersonalInfo">Next Form</button>
    </div>

  );
};

export default Inputsone;
