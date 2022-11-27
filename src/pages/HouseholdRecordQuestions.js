import React, { useState } from "react";

import "../styles/HouseholdRecordQuestion.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";
import { useSelector } from "react-redux";
import HouseholdModal from "../components/HouseholdModal";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const HouseholdRecordQuestions = () => {
  const householdList = useSelector(
    (state) => state.householdRecord.individual
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="HouseholdRecordQuestions">
      <HouseholdRecordLinks />
      <div className="HouseholdRecordQuestions__table">
        <AddCircleOutlinedIcon
          sx={{
            color: "#425F57",
            fontSize: 70,
            position: "absolute",
            bottom: 10,
            right: 10,
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(true)}
        />
        <HouseholdModal open={isOpen} onClose={() => setIsOpen(false)} />
        {householdList.length === 0 ? (
          <h1>No Household Records </h1>
        ) : (
          <h1>Records</h1>
        )}
      </div>
    </div>
  );
};

export default HouseholdRecordQuestions;
