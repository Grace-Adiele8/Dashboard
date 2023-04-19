import React from "react";
import "./index.scss";

function Slider({ className = "", variant }) {
  return <div className={`slider--${variant} ${className} `}></div>;
}

export default Slider;
