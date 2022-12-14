import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    gender: {
      male: 0,
      female: 0,
      other: 0,
      total: 0,
    },
    householdVsIndividual: {
      individual: 0,
      household: 0,
      total: 0,
    },
    population: 0,
  },
  reducers: {
    getDataGender: (state, action) => {
      state.gender = action.payload.data;
    },
    getDataGeneral: (state, action) => {
      state.householdVsIndividual = action.payload.data;
    },
  },
});

export const { getDataGender, getDataGeneral } = dashboardSlice.actions;
export default dashboardSlice.reducer;
