import { createSlice } from "@reduxjs/toolkit";

const valueTemplate = {
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

const questionsTemplate = {
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

const imageInformationTemplate = {
  photo: "",
  signature: "",
  leftThumbMark: "",
  rightThumbMark: "",
};

export const individualSlice = createSlice({
  name: "IndividualRecord",
  initialState: {
    isEmpty: {
      isEmptyQuestions: true,
      isEmptyIndividualRecordQuestions: true,
    },
    imageInformation: imageInformationTemplate,
    value: valueTemplate,
    questions: questionsTemplate,
  },
  reducers: {
    onChange: (state, action) => {
      state.value[action.payload.name] = action.payload.value;
      for (const properties in state.value) {
        if (state.value[properties] === "") {
          state.isEmpty.isEmptyIndividualRecordQuestions = true;
          return;
        }
      }
      state.isEmpty.isEmptyIndividualRecordQuestions = false;
    },
    onChangeQuestions: (state, action) => {
      state.questions[action.payload.name] = action.payload.value;
      for (const properties in state.questions) {
        if (state.questions[properties] === "") {
          state.isEmpty.isEmptyQuestions = true;
          return;
        }
      }
      state.isEmpty.isEmptyQuestions = false;
    },
    onChangeImage: (state, action) => {
      state.imageInformation[action.payload.name] = action.payload.value;
      console.log(state.imageInformation);
    },
    submitToDatabase: (state, action) => {
      console.log([
        action.payload.questions,
        action.payload.individualRecordValue,
      ]);
      alert(
        `${action.payload.questions.q1FirstName} ${action.payload.questions.q1Surname} has been recorded.`
      );
      state.value = valueTemplate;
      state.questions = questionsTemplate;
    },
  },
});

export const { onChange, onChangeQuestions, submitToDatabase, onChangeImage } =
  individualSlice.actions;
export default individualSlice.reducer;
