import React from "react";
import "./input1.css";
const Input1 = ({ placeholder, Handlechange, values }) => {
  return (
    <div className="inputparts">
      <input
        type="text"
        placeholder={placeholder}
        onChange={Handlechange(values)}
      />
    </div>
  );
};

export default Input1;
