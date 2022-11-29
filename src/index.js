import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import individualReducer from "./features/IndividualRecordInputs";
import householdReducer from "./features/HouseholdInputs";

const store = configureStore({
  reducer: {
    individualRecord: individualReducer,
    householdRecord: householdReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
