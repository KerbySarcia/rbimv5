import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/IndividualRecordLinks.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "../images/RBIM_LOGO.png";
import { useSelector, useDispatch } from "react-redux";
import { submitToDatabase } from "../features/HouseholdInputs";

import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { useNavigate } from "react-router-dom";

const HouseholdRecordLinks = () => {
  const individual = useSelector((state) => state.householdRecord.individual);
  const householdValue = useSelector((state) => state.householdRecord.value);
  const isEmpty = useSelector((state) => state.householdRecord.isEmpty);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitButton = () => {
    if (individual.length > 0 && isEmpty === false)
      return (
        <button
          onClick={() => {
            dispatch(
              submitToDatabase({
                householdRecord: householdValue,
                individual: individual,
              })
            );
            navigate("/household-record");
          }}
        >
          Submit
        </button>
      );
  };
  return (
    <>
      <section>
        <div className="IndividualLinks__box IndividualLinks__row">
          <div className="IndividualLinks__Title">
            <img src={logo} width="50" alt="" className="Reports__logo" />
            <h1>Household Records</h1>
          </div>
          <div className="IndividualLinks__row">
            {submitButton()}
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
