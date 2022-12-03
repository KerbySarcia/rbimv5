import { createSlice } from "@reduxjs/toolkit";

const questionTemplate = {
  id: 1,
  q1Surname: "",
  q1FirstName: "",
  q1MiddleName: "",
  q2: "",
  q3: "",
  q4: "",
  q5Month: "",
  q5Year: "",
  q6: "",
  q7: "",
  q8: "",
  q9: "",
  q10: "",
  q11: "",
  q12: "",
  q13: "",
  q14: "",
  q15: "",
  q16: "",
  q17: "",
  q18: "",
  q19: "",
  q20: "",
  q21: "",
  q22A: "",
  q22B: "",
  q23: "",
  q24: "",
  q25A: "",
  q25B: "",
  q26: "",
  q27: "",
  q28: "",
  q29: "",
  q30: "",
  q31: "",
  q32: "",
  q33A: "",
  q33B: "",
  q34A: "",
  q34B: "",
  q35A: "",
  q35B: "",
  q36: "",
  q37A: "",
  q37B: "",
  q38A: "",
  q38B: "",
  q38C: "",
  q39A: "",
  q39B: "",
  q40A: "",
  q40B: "",
  q40C: "",
  q41: "",
  q42A: "",
  q42B: "",
  q43: "",
  q44: "",
  q45: "",
  q46: "",
  q47: "",
  q48: "",
  q49: "",
  q50A: "",
  q50B: "",
  q51: "",
  q52: "",
  q53: "",
  q54Age: "",
  q54CauseOfDeath: "",
  q55Age: "",
  q55Sex: "",
  q55CauseOfDeath: "",
  q56A: "",
  q56B: "",
  q56C: "",
  q57A: "",
  q57B: "",
  q57C: "",
  q58Barangay: "",
  q58Municipality: "",
  q58Province: "",
};

export const HouseholdSlice = createSlice({
  name: "HouseholdRecord",
  initialState: {
    isEmpty: true,
    empty: true,
    value: {
      recordNumber: "",
      household: "",
      institutionalLivingQuarter: "",
      province: "",
      municipality: "",
      barangay: "",
      addressRoom: "",
      addressHouse: "",
      addressStreet: "",
      nameOfRespondent: "",
      householdHead: "",
      totalNumberOfHouseholdMembers: "",
      visit: "",
      timeStart: "",
      result: "",
      nameOfInterviewer: "",
      dateOfVisit: "",
      timeEnd: "",
      dateOfNextVisit: "",
      nameOfSupervisor: "",
      dateEncoded: "",
      nameAndInitialOfEncoder: "",
      nameOfSupervisorInitialAndDate: "",
    },
    individual: [],
    questions: questionTemplate,
  },
  reducers: {
    onChange: (state, action) => {
      state.value[action.payload.name] = action.payload.value;
      for (const properties in state.value) {
        if (state.value[properties] === "") {
          state.isEmpty = true;
          return;
        }
      }
      state.isEmpty = false;
    },
    onChangeQuestions: (state, action) => {
      state.questions[action.payload.name] = action.payload.value;
    },
    isEmpty: (state, action) => {
      for (const property in state.questions) {
        if (state.questions[property] === "") {
          state.empty = true;
          return;
        }
      }
      state.empty = false;
    },
    updateHouseholdRecord: (state, action) => {
      state.individual = state.individual.filter(
        (item) => item.id !== action.payload.id
      );

      state.individual.push(state.questions);

      state.questions = questionTemplate;
    },
    questionModal: (state, action) => {
      const temp = state.individual.filter(
        (item) => item.id === action.payload.id
      );
      state.questions = temp[0];
    },
    deleteHouseholdRecord: (state, action) => {
      state.individual = state.individual.filter(
        (item) => item.id !== action.payload.id
      );
    },
    submitToDatabase: (state, action) => {
      console.log({
        householdRecord: action.payload.householdRecord,
        householdRecordList: action.payload.individual,
      });

      state.value = {
        recordNumber: "",
        household: "",
        institutionalLivingQuarter: "",
        province: "",
        municipality: "",
        barangay: "",
        addressRoom: "",
        addressHouse: "",
        addressStreet: "",
        nameOfRespondent: "",
        householdHead: "",
        totalNumberOfHouseholdMembers: "",
        visit: "",
        timeStart: "",
        result: "",
        nameOfInterviewer: "",
        dateOfVisit: "",
        timeEnd: "",
        dateOfNextVisit: "",
        nameOfSupervisor: "",
        dateEncoded: "",
        nameAndInitialOfEncoder: "",
        nameOfSupervisorInitialAndDate: "",
      };
      state.individual = [];
    },
    eraseQuestions: (state, action) => {
      state.questions = questionTemplate;
    },
    addToIndividual: (state, action) => {
      state.questions.id = state.questions.id + state.individual.length;
      state.individual.push(state.questions);
      state.questions = questionTemplate;
    },
  },
});
export const {
  onChange,
  addToIndividual,
  onChangeQuestions,
  isEmpty,
  questionModal,
  eraseQuestions,
  deleteHouseholdRecord,
  updateHouseholdRecord,
  submitToDatabase,
} = HouseholdSlice.actions;
export default HouseholdSlice.reducer;
