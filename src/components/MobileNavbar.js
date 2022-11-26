import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/MobileNavbar.css";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="MobileNavbar">
      <div className="" onClick={() => setIsClicked((prevValue) => !prevValue)}>
        <MenuIcon className="MobileNavbar__icon" />
      </div>
      <h3 className="MobileNavbar__title">RBIM</h3>

      <div
        onClick={() => setIsClicked((prevValue) => !prevValue)}
        className={`SlideMenu ${isClicked ? "SlideMenu-show" : ""} `}
      >
        <div className="SlideMenu__links">
          <div className="SlideMenu__links__link">
            <Link to="/">
              <h3 className="SlideMenu__link">Home</h3>
            </Link>
            <Link to="/individual-records">
              <h3 className="SlideMenu__link">Individual Record</h3>
            </Link>
            <Link to="/household-record">
              <h3 className="SlideMenu__link">Household Record</h3>
            </Link>
            <Link to="/reports">
              <h3 className="SlideMenu__link">Reports</h3>
            </Link>
          </div>

          <div className="SlideMenu__links__link-bottom">
            <h3 className="SlideMenu__link">Account</h3>
            <h3 className="SlideMenu__link">Logout</h3>
            <h3 className="SlideMenu__link">Settings</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
