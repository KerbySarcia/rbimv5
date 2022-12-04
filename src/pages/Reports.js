import React, { useEffect, useState } from "react";
import "../styles/Reports.css";
import logo from "../images/RBIM_LOGO.png";
import axios from "axios";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    axios.get("http://localhost:80/rbimv5/server/Reports.php").then((res) => {
      setReports(res.data);
      setSearch(res.data);
    });
  }, []);

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

  const reportsElement = reports.map((report) => {
    return (
      <tr>
        <td>{report.Name_of_Respondent}</td>
        <td>{report.NO}</td>
        <td>{report.Household}</td>
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
          </tr>
          {reportsElement}
        </table>
      </div>
    </div>
  );
};

export default Reports;
