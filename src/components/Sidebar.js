import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import ButtonGroup from "./ButtonGroup";
import Modal from './SettingsModal'
import Logout from './Logout'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [logOut, setlogOut] = useState(false);

  const isLoggedIn = useSelector(state => state.sessionRecord.login)
  
  const navigate = useNavigate()

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('dataKey'))
    if(isLoggedIn === false && !items){
      navigate('/login')
    }
  }, [isLoggedIn])

  return (
    <div className="Sidebar">
      <ButtonGroup />

      <div className="Sidebar__bottom">
        <button
          className="Sidebar__btn Sidebar__btn__gray">
          <AccountBoxOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <button
          onClick={() => setlogOut(true)}
          className="Sidebar__btn">
          <LogoutOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="Sidebar__btn">
          <SettingsOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        <Logout open={logOut} onClose={() => setlogOut(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
