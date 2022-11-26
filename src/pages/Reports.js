import React from "react";
import "../styles/Reports.css";
import logo from "../images/RBIM_LOGO.png";

const Reports = () => {
  return (
    <div className="Reports">
      <div className="Reports__top-nav">
        <div className="Reports__logo-title">
          <img src={logo} width="50" alt="" className="Reports__logo" />
          <h2 className="Reports__title">Reports</h2>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="Reports__search"
        />
      </div>
    </div>
  );
};

export default Reports;
