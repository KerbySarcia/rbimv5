import React, { useEffect, useState } from "react";
import "../styles/Reports.css";
import logo from "../images/RBIM_LOGO.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateDatabase } from "../features/IndividualRecordInputs";
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../features/GeneralFunction";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Reports = () => {
  TabTitle("RBIM | Reports");

  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState();
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState();
  const [updateData, setUpdateData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:80/rbimv5/server/Reports.php").then((res) => {
      setReports(res.data);
      setSearch(res.data);
      setDeleteTrigger(false);
      setUpdateTrigger(false);
    });
  }, [deleteTrigger]);

  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = search;
    updatedList = updatedList.filter((item) => {
      return (
        item.Name_of_Respondent.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
      );
    });
    setReports(updatedList);
  };

  const handleDelete = (Total_Number_of_Household, deleteId) => {
    let mode = "";
    if (Number(Total_Number_of_Household) === 1) mode = "individual-record";
    else mode = "household-record";
    axios
      .delete(
        `http://localhost:80/rbimv5/server/Reports.php/${deleteId}/${mode}-delete`
      )
      .then((res) => setDeleteTrigger(true));
  };

  const handleUpdate = (Total_Number_of_Household, updateId) => {
    let mode = "";
    if (Number(Total_Number_of_Household) === 1) mode = "individual-record";
    else mode = "household-record";
    axios
      .get(
        `http://localhost:80/rbimv5/server/Update_Individual_Record.php/${updateId}/${mode}-update`
      )
      .then((res) => {
        setUpdateData(res.data);
        dispatch(updateDatabase({ data: res.data }));
      });
    setUpdateTrigger(true);
    navigate("/individual-records");
  };

  const reportsElement = reports.map((report) => {
    return (
      <tr>
        <td>{report.Name_of_Respondent}</td>
        <td>{report.NO}</td>
        <td>{report.Household}</td>
        <td className="Reports__btn__group">
          <button
            className="Reports__danger__btn"
            onClick={() =>
              handleDelete(report.Total_Number_of_Household, report.id)
            }
          >
           < DeleteForeverRoundedIcon sx={{ fontSize: "large" }} /> <span className="Reports_span_btn">Delete</span>
          </button>

          <button
            className="Reports__update__btn"
            onClick={() =>
              handleUpdate(report.Total_Number_of_Household, report.id)
            }
          >
            
            < EditIcon sx={{ fontSize: "large" }} /> <span className="Reports_span_btn">Update</span>
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="Reports">
      <div className="Reports__top-nav">
        <div className="Reports__logo-title">
          <img src={logo} width="50" alt="" className="Reports__logo" />
          <h2 className="Reports__title">Reports</h2>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="Reports__search"
          onChange={filterBySearch}
        />
      </div>
      <div className="Reports_table">
        <table>
          <tr>
            <th>Name of Respondent</th>
            <th>NO</th>
            <th>Household</th>
            <th>Delete | Update</th>
          </tr>
          {reportsElement}
        </table>
      </div>
    </div>
  );
};

export default Reports;
