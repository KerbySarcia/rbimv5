import React, { useState } from "react";

import "../styles/HouseholdRecordQuestion.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";
import { useSelector } from "react-redux";
import HouseholdModal from "../components/HouseholdModal";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import TableRow from "../components/TableRow";

const HouseholdRecordQuestions = () => {
  const householdList = useSelector(
    (state) => state.householdRecord.individual
  );
  console.log(householdList);
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
          <h1 className="HouseholdRecordQuestions__noRecords">
            No Household Records
          </h1>
        ) : (
          <table>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>MI</th>
              <th>Sex</th>
              <th>Age</th>
              <th className="small__width__dateOfBirth">Date of Birth (Y)</th>
              <th className="small__width">Actions</th>
            </tr>

            {householdList.map((item) => {
              return (
                <TableRow
                  lastname={item.q1Surname}
                  firstname={item.q1FirstName}
                  sex={item.q3}
                  age={item.q4}
                  mi={item.q1MiddleName}
                  dateofbirth={item.q5Year}
                  id={item.id}
                />
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default HouseholdRecordQuestions;
