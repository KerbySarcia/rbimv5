import React, { useState } from "react";
import "../styles/ButtonGroup.css";
import Button from "./Button";

import TableChartIcon from "@mui/icons-material/TableChart";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";

import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import { Link } from "react-router-dom";
const ButtonGroup = ({ button }) => {
  const [isClicked, setIsClicked] = useState([
    {
      name: "Home",
      click: true,
    },

    {
      name: "Add",
      click: false,
    },

    {
      name: "Map",
      click: false,
    },

    {
      name: "Table",
      click: false,
    },
  ]);

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    setIsClicked((prevValue) => {
      return prevValue.map((icon) => {
        if (name === icon.name) return { ...icon, click: true };
        else return { ...icon, click: false };
      });
    });
  };

  return (
    <div className="ButtonGroup">
      <Link to="">
        <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<HomeIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={<HomeOutlinedIcon sx={{ fontSize: "xx-large" }} />}
            isClicked={isClicked[0].click}
            name="Home"
          />
        </div>
      </Link>

      <Link to="individual-records">
        <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<NoteAddIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={<NoteAddOutlinedIcon sx={{ fontSize: "xx-large" }} />}
            isClicked={isClicked[1].click}
            name="Add"
          />
        </div>
      </Link>

      <Link to="household-record">
        <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<MapsHomeWorkIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={
              <MapsHomeWorkOutlinedIcon sx={{ fontSize: "xx-large" }} />
            }
            isClicked={isClicked[2].click}
            name="Map"
          />
        </div>
      </Link>

      <Link to="reports">
        <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<TableChartIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={
              <TableChartOutlinedIcon sx={{ fontSize: "xx-large" }} />
            }
            isClicked={isClicked[3].click}
            name="Table"
          />
        </div>
      </Link>
    </div>
  );
};

export default ButtonGroup;
