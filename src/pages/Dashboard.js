import React, { useEffect } from "react";
import "../styles/Dashboard.css";
import DateTime from "../features/DateTime";
import { TabTitle } from "../features/GeneralFunction";
import ChartGender from "../components/ChartGender";
import ChartPopulation from "../components/ChartPopulation";
import HouseholdVsIndividualChart from "../components/HouseholdVsIndividualChart";
import { useDispatch } from "react-redux";
import { getDataGender } from "../features/DashboardData";

const Dashboard = () => {
  TabTitle("RBIM | Dashboard");

  const dispatch = useDispatch();

  return (
    <div className="Dashboard">
      <div className="container-one">
        <ChartGender />
        {/* <div className="Dashboard__one__time"></div> */}
      </div>
      <div className="container-two">
        <HouseholdVsIndividualChart />
      </div>
      <div className="container-three"></div>
      <div className="container-four">
        <ChartPopulation />
      </div>
    </div>
  );
};

export default Dashboard;
