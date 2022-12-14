import React from "react";
import "../styles/Dashboard.css";
import DateTime from '../features/DateTime'
import { TabTitle } from '../features/GeneralFunction'
import Error404 from './Error404'

const Dashboard = () => {
  TabTitle('RBIM | Dashboard')

  if(JSON.parse(sessionStorage.getItem('dataKey'))){
    const items = JSON.parse(sessionStorage.getItem('dataKey'))
    if(items.access_lvl === 'on-site') {
      return(<Error404 />)
    }
  }

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
