import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../styles/SharedLayout.css";
import MobileNavbar from "../components/MobileNavbar";

const SharedLayout = () => {
  return (
    <div className="SharedLayout">
      <Sidebar />
      <div className="SharedLayout__vertical">
        <MobileNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
