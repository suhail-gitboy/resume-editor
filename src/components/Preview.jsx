import React, { useEffect, useState } from "react";
import "./preview.css";
import { Link, useNavigate } from "react-router";
import Atsmodel from "./atsmodel";
import Modern from "./modern";

const Preview = ({ resumetype, resumedata, Setresumedata, loading, resumes, Setresume, editIndex, Seteditindex }) => {
  const RenderResume = () => {
    switch (resumetype) {
      case "atsfriendly":
        return <Atsmodel resumedata={resumedata} />;
      case "modern":
        return <Modern resumedata={resumedata} />;
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (editIndex !== null) {
      Setresumedata(resumes[editIndex]);
    }
  }, [editIndex, resumes])



  const Handlesave = () => {
    if (editIndex !== null) {
      const Updated = [...resumes];
      Updated[editIndex] = resumedata;
      Setresume(Updated);
      // Seteditindex(null);
    } else {
      Setresume([...resumes, resumedata]);

    }
    navigate('/dashboard')
  }

  return (
    <div className="preview" id="preview">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="cvpreview" id="preview">
          {RenderResume()}
          <br />
          <br />
          <br />
          <br />

          <Link to="/dashboard"><button onClick={Handlesave}>Save CV</button></Link>
        </div>
      )}


    </div>
  );
};

export default Preview;
