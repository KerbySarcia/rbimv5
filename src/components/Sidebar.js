import React, { useState } from "react";
import "../styles/Sidebar.css";
import ButtonGroup from "./ButtonGroup";
import Modal from './SettingsModal'

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div className="Sidebar">
      <ButtonGroup />

      <div className="Sidebar__bottom">
        <button
          className="Sidebar__btn">
          <AccountBoxOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <button
          onClick={()=>{
            localStorage.removeItem('dataKey')
            navigate('/login')
          }}
          className="Sidebar__btn">
          <LogoutOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="Sidebar__btn">
          <SettingsOutlinedIcon sx={{ fontSize: "xx-large" }} />
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
