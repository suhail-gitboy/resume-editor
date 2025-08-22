import React, { useEffect, useState } from "react";
import "./Search.css";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router";

const Searchbar = ({ resumes, Setresume, editIndex, Seteditindex }) => {

  const navigate = useNavigate();
  const Handleedit = (idx) => {
    Seteditindex(idx);
    navigate('/editingpage')

  }
  const DeleteFunction = (idx) => {
    Setresume(resumes.filter((_, i) => i !== idx))
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="listofresumes">{
        resumes.length === 0 ? <h1>empty</h1> :
          resumes.map((data, index) => (
            <div className="resumehistory" key={index}>
              <br />
              <h3>Resume</h3>
              <h4>{data.personalInfo.name}</h4>

              <button className="btn1" onClick={() => Handleedit(index)}>edit</button>
              <button className="btn1" onClick={() => DeleteFunction(index)}>delete</button>
              <button className="download">Download as PDF</button>
            </div>
          ))}

      </div>
    </div>
  )
};

export default Searchbar;
