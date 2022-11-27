import React, { useState } from "react";

import "../styles/HouseholdRecordQuestion.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";
import { useSelector } from "react-redux";
import HouseholdModal from "../components/HouseholdModal";

const HouseholdRecordQuestions = () => {
  const householdList = useSelector(
    (state) => state.householdRecord.individual
  );

  return (
    <div className="HouseholdRecordQuestions">
      <HouseholdRecordLinks />
      <div className="HouseholdRecordQuestions__table">
        {householdList.length === 0 ? <HouseholdModal /> : <h1>Records</h1>}
      </div>
    </div>
  );
};

export default HouseholdRecordQuestions;
