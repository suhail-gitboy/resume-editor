import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import "./Resumeediting.css";
import Preview from "../components/Preview";
import Resumeinput from "../components/input";

const Resumeediting = ({ resumes, Setresume, editIndex, SeteditIndex }) => {
  const [show, Setshow] = useState(false);
  const [resumetype, Setresumetype] = useState("atsfriendly");
  const HandleClick = () => {
    Setshow(!show);
  };
  const [loading, Setloading] = useState(false);
  const [resumedata, Setresumedata] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      ambition: ""
    },
    experience: { company: "", role: "", duration: "" },
    education: { school: "", degree: "", year: "" },
    skill: { skillone: "", skilltwo: "", skillthree: "" },
    hobbies: {
      hobbyone: "",
      hobbytwo: "",
    },
  });

  return (
    <div className="appeditor">
      <div className="headings">
        <h2 >Build your Professional resume</h2>
        <p>Cresate a standout resume with our AI-powered builder</p>
      </div>
      <div className="resumetypeclass">
        <h3 onClick={() => Setresumetype("modern")}>Modern</h3>
        <h3 onClick={() => Setresumetype("atsfriendly")}>Ats Friendly</h3>
      </div>



      <div className="subdivappeditor">
        <Resumeinput
          resumedata={resumedata}
          Setresumedata={Setresumedata}
          Setloading={Setloading}
        />
        <Preview
          resumetype={resumetype}
          resumedata={resumedata}
          Setresumedata={Setresumedata}
          loading={loading} resumes={resumes} Setresume={Setresume} editIndex={editIndex} Seteditindex={SeteditIndex}
        />
      </div>
    </div>
  );
};
export default Resumeediting;
