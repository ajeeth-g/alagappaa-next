import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return <button className="ctaPrimary">
    <p>{text}</p>
  </button>;
};

export default Button;
