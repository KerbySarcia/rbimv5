import React, { useEffect } from "react";
import "../styles/Dashboard.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const isLoggedIn = useSelector(state => state.sessionRecord.login)
  
  const navigate = useNavigate()

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('dataKey'))
    if(isLoggedIn == false && !items){
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <div className="Dashboard">
      <div className="container-one"></div>
      <div className="container-two"></div>
      <div className="container-three"></div>
      <div className="container-four"></div>
    </div>
  );
};

export default Dashboard;
