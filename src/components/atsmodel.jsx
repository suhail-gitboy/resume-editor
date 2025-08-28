import React, { forwardRef } from "react";
import "./atsfriendly.css"
const Atsmodel = forwardRef(({ resumedata }, ref) => {


  return (
    <div className="ats" ref={ref}>
      <h1>{resumedata.personalInfo.name}</h1>
      <p>Email: {resumedata.personalInfo.email}</p>
      <p>Phone: {resumedata.personalInfo.phone}</p>

      <h2>Experience</h2>
      <ul>
        <li><strong>{resumedata.experience.role}</strong>,{resumedata.experience.company}</li>
        <li><strong>Junior Developer</strong>, XYZ Ltd (2018–2020)</li>
      </ul>

      <h2 className="h2">Qualification</h2>
      <ul>
        <li>{resumedata.education.degree} ({resumedata.education.duration})</li>
      </ul>

      <h2 className="h2">Skills</h2>
      <ul>
        <li>{resumedata.skill.skillone}</li>
        <li>{resumedata.skill.skilltwo}</li>
        <li>{resumedata.skill.skillthree}</li>
        <li>Git & GitHub</li>
      </ul>

      <h2>Hobbies</h2>
      <ul>
        <li>{resumedata.hobbies.hobbyone}</li>
        <li>{resumedata.hobbies.hobbytwo}</li>
        <li>Cycling</li>
      </ul>


    </div>
  );
});

export default Atsmodel;
