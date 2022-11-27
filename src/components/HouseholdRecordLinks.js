import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/IndividualRecordLinks.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../images/RBIM_LOGO.png";

import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const HouseholdRecordLinks = () => {
  return (
    <>
      <section>
        <div className="IndividualLinks__box IndividualLinks__row">
          <div className="IndividualLinks__Title">
            <img src={logo} width="50" alt="" className="Reports__logo" />
            <h1>Household Records</h1>
          </div>
          <div className="IndividualLinks__row">
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? { background: "#425F57", color: "white" }
                  : {};
              }}
              className="IndividualLinks__link IndividualLinks__btn"
              end
              to="/household-record"
            >
              <AccountCircleOutlinedIcon />
              <span className="IndividualLinks__link-text">
                Personal Information
              </span>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? { background: "#425F57", color: "white" }
                  : {};
              }}
              className="IndividualLinks__link IndividualLinks__btn"
              to="/household-record/questions"
            >
              <Groups2OutlinedIcon />
              <span className="IndividualLinks__link-text">
                Household Records
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default HouseholdRecordLinks;
