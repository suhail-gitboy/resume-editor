import React, { useEffect, useRef, useState } from "react";
import "./input.css";
import { Link } from "react-router";
import { useOutletContext } from "react-router";
import Inputsone from "./inputscompoenet/inputs0ne";
import Input1 from "./input1";
import Five from "./inputscompoenet/Five";
import Four from "./inputscompoenet/Four";
import Inputthree from "./inputscompoenet/inputthree";
import Inputtwo from "./inputscompoenet/inputtwo";
const Resumeinput = ({ resumedata, Setresumedata, Setloading }) => {
  const [inputdynamic, Setinputdynamic] = useState("name");
  console.log(resumedata)
  const HandlepersonalInfo = (e) => {
    const { value, name } = e.target;
    Setresumedata({
      ...resumedata,
      personalInfo: {
        ...resumedata.personalInfo,
        [name]: value,
      },
    });
  };

  // qualification

  const Handlequalificayion = (e) => {
    const { name, value } = e.target;
    Setresumedata({
      ...resumedata,
      education: {
        ...resumedata.education,
        [name]: value,
      },
    });
  };
  // experience

  const Handleexperience = (e) => {
    const { name, value } = e.target;
    Setresumedata({
      ...resumedata,
      experience: {
        ...resumedata.experience,
        [name]: value,
      },
    });
  };

  // handleskill

  const Handleskill = (e) => {
    const { name, value } = e.target;
    Setresumedata({
      ...resumedata,
      skill: {
        ...resumedata.skill,
        [name]: value,
      },
    });
  };

  const Handlehobbies = (e) => {
    const { value, name } = e.target;
    Setresumedata({
      ...resumedata,
      hobbies: {
        ...resumedata.hobbies,
        [name]: value,
      },
    });
  };
  // const alertShown = useRef(false);
  // useEffect(() => {
  //   if (resumedata.skill !== "") {
  //     Setloading(true);
  //   }
  //   if (resumedata.skill !== "") {
  //     setTimeout(() => {
  //       Setloading(false);
  //       alert(`${resumedata.name}'s resume is ready`);
  //       alertShown.current = true;
  //     }, 4000);
  //   }
  // }, [resumedata]);

  const InputSwitch = () => {
    switch (inputdynamic) {
      case "name":
        return (
          <Inputsone
            Handlechange={HandlepersonalInfo}
            resumedata={resumedata}
          />
        );
      case "qualifications":
        return (
          <Inputthree
            Handlechange={Handlequalificayion}
            resumedata={resumedata}
          />
        );
      case "experience":
        return (
          <Inputtwo

            Handlechange={Handleexperience}
            resumedata={resumedata}
          />
        );
      case "skills":
        return <Four Handlechange={Handleskill} resumedata={resumedata} />;

      case "hobbies":
        return <Five Handlechange={Handlehobbies} resumedata={resumedata} />;
      case "ambition":
        return <Input1 />;
    }
  };

  return (
    <section className="edit">
      <div className="inputdiv" id="inputdiv">
        {/* //<input
          type="text"
          name="name"
          placeholder="Full Name"
          value={resumedata.name}
          onChange={Handlechange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={resumedata.email}
          onChange={Handlechange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={resumedata.phone}
          onChange={Handlechange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills"
          value={resumedata.skill}
          onChange={Handlechange}
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={resumedata.experience}
          onChange={Handlechange}
        />  */}
        <button onClick={() => Setinputdynamic("name")}>name</button>
        <button onClick={() => Setinputdynamic("qualifications")}>
          qaulifications
        </button>
        <button onClick={() => Setinputdynamic("experience")}>
          experience
        </button>
        <button onClick={() => Setinputdynamic("skills")}>skills</button>
        <button onClick={() => Setinputdynamic("hobbies")}>hobbies</button>
        <button onClick={() => Setinputdynamic("ambition")}>ambition</button>
      </div>
      <div className="inputtwo">{InputSwitch()}</div>
    </section>
  );
};

export default Resumeinput;
