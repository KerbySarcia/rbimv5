import React, { useState } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import "../styles/IndividualRecordLinks.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const IndividualRecordLinks = () => {
  // Modal Functions
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <div className="IndividualLinks__box IndividualLinks__row">
          <div className="IndividualLinks__Title">
            <h1>Individual Records</h1>
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
              to="/individual-records"
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
              to="/individual-records/questions"
            >
              <HelpOutlineOutlinedIcon />
              <span className="IndividualLinks__link-text">Questions</span>
            </NavLink>
            <button
              onClick={() => setIsOpen(true)}
              className="IndividualLinks__link IndividualLinks__btn"
            >
              <FileDownloadOutlinedIcon />
              <span className="IndividualLinks__link-text">Image Upload</span>
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </section>
    </>
  );
};

export default IndividualRecordLinks;
