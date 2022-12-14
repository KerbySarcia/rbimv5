import React, { useEffect } from "react";
import "../styles/Dashboard.css";

import { TabTitle } from "../features/GeneralFunction";
import Error404 from "./Error404";
import ChartGender from "../components/ChartGender";
import ChartPopulation from "../components/ChartPopulation";
import HouseholdVsIndividualChart from "../components/HouseholdVsIndividualChart";
import { useSelector, useDispatch } from "react-redux";
import { getDataGender, getDataGeneral } from "../features/DashboardData";
import axios from "axios";

const Dashboard = () => {
  TabTitle("RBIM | Dashboard");

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:80/rbimv5/server/Get_Gender.php`)
      .then((res) => {
        dispatch(getDataGender({ data: res.data }));
      });

    axios
      .get(`http://localhost:80/rbimv5/server/Get_Updates.php`)
      .then((res) => {
        dispatch(getDataGeneral({ data: res.data }));
      });
  }, []);

  if (JSON.parse(sessionStorage.getItem("dataKey"))) {
    const items = JSON.parse(sessionStorage.getItem("dataKey"));
    if (items.access_lvl === "on-site") {
      return <Error404 />;
    }
  }

  return (
    <div className="Dashboard">
      <div className="container-one">
        <ChartGender />
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
