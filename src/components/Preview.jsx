import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print"
import "./preview.css";
import { Link, useNavigate } from "react-router";
import Atsmodel from "./atsmodel";
import Modern from "./modern";

const Preview = ({ resumetype, resumedata, Setresumedata, loading, resumes, Setresume, editIndex, Seteditindex }) => {


  const componentRef = useRef()

  const RenderResume = () => {





    switch (resumetype) {
      case "atsfriendly":
        return <Atsmodel ref={componentRef} resumedata={resumedata} />;
      case "modern":

        return <Modern ref={componentRef} resumedata={resumedata} />;
    }
  };


  const navigate = useNavigate();
  const Handleprint = useReactToPrint({

    contentRef: componentRef,
    documentTitle: "resume",
    pageStyle: `
       @page {
        size:A4;
        margin:20mm;
       }
        @media print{
      body{
       -webkit-print-color-adjust:exact;
       }
    }
        `,

  })

  console.log(componentRef.current)
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


        </div>
      )}
      <div className="buttonmanage" style={resumetype === 'atsfriendly' ? { marginTop: '0px' } : { marginTop: "160px" }}>
        <Link to="/dashboard"  ><button className="draft" onClick={Handlesave}>Save To Draft</button></Link>
        <button className="download" onClick={Handleprint}>Download as PDF</button>
      </div>


    </div>
  );
};

export default Preview;
