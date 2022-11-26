import React from "react";

import "../styles/HouseholdRecordQuestion.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";

const HouseholdRecordQuestions = () => {
  return (
    <div className="HouseholdRecordQuestions">
      <HouseholdRecordLinks />
      <div className="HouseholdRecordQuestions__table">
        <h1>Table</h1>
      </div>
    </div>
  );
};

export default HouseholdRecordQuestions;
