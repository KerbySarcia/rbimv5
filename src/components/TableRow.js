import React, { useState } from "react";
import Modal from "./HouseholdModal";
import {
  questionModal,
  deleteHouseholdRecord,
} from "../features/HouseholdInputs";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TableRow.css";

const TableRow = ({ lastname, firstname, mi, sex, age, dateofbirth, id }) => {
  // TODO: X button not working
  const [isOpen, setIsOpen] = useState(false);
  const questions = useSelector((state) => state.householdRecord.questions);
  const individual = useSelector((state) => state.householdRecord.individual);

  const dispatch = useDispatch();
  return (
    <tr>
      <td>{lastname}</td>
      <td>{firstname}</td>
      <td>{mi}</td>
      <td>{sex}</td>
      <td>{age}</td>
      <td>{dateofbirth}</td>
      <td className="TableRow__buttons">
        <button
          className="TableRow__question"
          onClick={() => {
            setIsOpen(true);
            dispatch(questionModal({ id: id }));
          }}
        >
          Question
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} id={id} />
        <button
          className="TableRow__delete"
          onClick={() => dispatch(deleteHouseholdRecord({ id: id }))}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
