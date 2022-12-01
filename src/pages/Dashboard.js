import React from "react";
import "../styles/Dashboard.css";
import DateTime from '../features/DateTime'

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container-one">
        <div className="Dashboard__one__time">
          <DateTime />
        </div>
      </div>
      <div className="container-two"></div>
      <div className="container-three"></div>
      <div className="container-four"></div>
    </div>
    
  );
};

export default Dashboard;
