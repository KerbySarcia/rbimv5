import React, { useState } from "react";
import "../styles/Button.css";

const Button = ({ isClicked, iconSelected, iconDefault, name }) => {
  return (
    <div className={`${isClicked ? "isClicked" : "Button"} button-style`}>
      {isClicked ? iconSelected : iconDefault}
      <div name={name} className="click__function"></div>
    </div>
  );
};

export default Button;
