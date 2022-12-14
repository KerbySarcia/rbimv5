import React, { useEffect, useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import AlertModal from "./AlertModal";
import { useSelector, useDispatch } from "react-redux";
import { defaultValue } from "../features/IndividualRecordInputs";
import { defaultValueHousehold } from "../features/HouseholdInputs";

const ButtonGroup = ({ access_lvl }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [navigateTo, setNavigateTo] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isEmpty = useSelector((state) => state.individualRecord.isEmpty);
  const isEmptyHousehold = useSelector(
    (state) => state.householdRecord.isContain
  );

  const handleClose = (e) => {
    const btn = e.target.name;
    if (btn === "okay") {
      if (location.pathname.includes("individual-records")) {
        dispatch(defaultValue());
      } else dispatch(defaultValueHousehold());
      navigate(navigateTo);
    }
    setOpen(false);
  };

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");

    setNavigateTo(name);
    if (location.pathname.includes("individual-records") && isEmpty.isContain) {
      setOpen(true);
    } else if (
      location.pathname.includes("household-record") &&
      isEmptyHousehold
    ) {
      setOpen(true);
    } else {
      navigate(name);
    }
  };

  return (
    <div className="ButtonGroup">
      { access_lvl === 'admin' || access_lvl === 'secretary' ?
          <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<HomeIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={<HomeOutlinedIcon sx={{ fontSize: "xx-large" }} />}
            isClicked={location.pathname === "/" ? true : false}
            name="/"
          />
          </div> : ''
      }
      <AlertModal
        isOpen={open}
        navigate={navigateTo}
        handleClick={(e) => handleClose(e)}
      />
      <div className="ButtonGroup__container" onClick={handleClick}>
        <Button
          iconSelected={<NoteAddIcon sx={{ fontSize: "xx-large" }} />}
          iconDefault={<NoteAddOutlinedIcon sx={{ fontSize: "xx-large" }} />}
          isClicked={
            location.pathname.includes("individual-records") ? true : false
          }
          name="/individual-records"
        />
      </div>
      <div className="ButtonGroup__container" onClick={handleClick}>
        <Button
          iconSelected={<MapsHomeWorkIcon sx={{ fontSize: "xx-large" }} />}
          iconDefault={
            <MapsHomeWorkOutlinedIcon sx={{ fontSize: "xx-large" }} />
          }
          isClicked={
            location.pathname.includes("household-record") ? true : false
          }
          name="household-record"
        />
      </div>
      { access_lvl === 'admin' || access_lvl === 'secretary' ? 
        <div className="ButtonGroup__container" onClick={handleClick}>
          <Button
            iconSelected={<TableChartIcon sx={{ fontSize: "xx-large" }} />}
            iconDefault={<TableChartOutlinedIcon sx={{ fontSize: "xx-large" }} />}
            isClicked={location.pathname.includes("reports") ? true : false}
            name="/reports"
          />
        </div> : ''
      }
    </div>
  );
};

export default ButtonGroup;
