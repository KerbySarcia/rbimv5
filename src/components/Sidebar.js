import React from "react";
import "../styles/Sidebar.css";
import ButtonGroup from "./ButtonGroup";

import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ButtonGroup />

      <div className="Sidebar__bottom">
        <Button
          isClicked={false}
          iconDefault={<AccountBoxOutlinedIcon sx={{ fontSize: "xx-large" }} />}
        />

        <Button
          isClicked={false}
          iconDefault={<LogoutOutlinedIcon sx={{ fontSize: "xx-large" }} />}
        />

        <Button
          isClicked={false}
          iconDefault={<SettingsOutlinedIcon sx={{ fontSize: "xx-large" }} />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
