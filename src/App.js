import React from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import IndividualRecords from "./pages/IndividualRecords";
import Questions from "./pages/Questions";
import HouseholdRecord from "./pages/HouseholdRecord";
import Reports from "./pages/Reports";
import SharedLayout from "./pages/SharedLayout";
import HouseholdRecordQuestions from "./pages/HouseholdRecordQuestions";
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="individual-records"
              element={<IndividualRecords />}
            ></Route>
            <Route
              path="individual-records/questions"
              element={<Questions />}
            />
            <Route path="household-record" element={<HouseholdRecord />} />
            <Route
              path="household-record/questions"
              element={<HouseholdRecordQuestions />}
            />
            <Route path="reports" element={<Reports />} />
            <Route path="about-the-team" element={<AboutUs />} />
          </Route>
          <Route path="404" element={<Error404 />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
