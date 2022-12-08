import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  totalNumberOfHouseholdMembers: "1",
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

const imageFileNameTemplate = {
  photo: "",
  signature: "",
  leftThumbMark: "",
  rightThumbMark: "",
};

export const individualSlice = createSlice({
  name: "IndividualRecord",
  initialState: {
    imageFileName: imageFileNameTemplate,
    isEmpty: {
      isEmptyQuestions: true,
      isEmptyIndividualRecordQuestions: true,
      isEmptyImageInformation: true,
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
      state.imageFileName[action.payload.name] = action.payload.value.name;
      for (const properties in state.imageInformation) {
        if (state.imageInformation[properties] === "") {
          state.isEmpty.isEmptyImageInformation = true;
          return;
        }
      }
      state.isEmpty.isEmptyImageInformation = false;
    },
    submitToDatabase: (state, action) => {
      axios.post("http://localhost:80/rbimv5/server/Individual_Record.php", {
        questions: action.payload.questions,
        individualRecord: action.payload.individualRecordValue,
        imageFileName: action.payload.imageFileName,
      });
      alert(
        `${action.payload.questions.q1FirstName} ${action.payload.questions.q1Surname} has been recorded.`
      );

      // Default Value
      state.value = valueTemplate;
      state.questions = questionsTemplate;
      state.imageInformation = imageInformationTemplate;
      state.imageFileName = imageFileNameTemplate;
      state.isEmpty.isEmptyImageInformation = true;
      state.isEmpty.isEmptyIndividualRecordQuestions = true;
      state.isEmpty.isEmptyQuestions = true;
    },
    updateDatabase: (state, action) => {
      const individual = action.payload.data.individual[0];
      const encoding = action.payload.data.encoding[0];
      const identification = action.payload.data.identification[0];
      const images = action.payload.data.images[0];
      const interview = action.payload.data.interview[0];
      const questionPartA = action.payload.data.questionPartA[0];
      const questionPartB = action.payload.data.questionPartB[0];
      const questionPartC = action.payload.data.questionPartC[0];
      const questionPartD = action.payload.data.questionPartD[0];

      state.value = {
        recordNumber: individual.NO,
        household: individual.Household,
        institutionalLivingQuarter: individual.Institutional_Living_Quarter,
        province:identification.Province,
        municipality:identification.City_Municipality,
        barangay: identification.Barangay,
        addressRoom:identification.Address_A,
        addressHouse: identification.Address_B,
        addressStreet: identification.Address_C,
        nameOfRespondent: identification.Name_of_Respondent,
        householdHead: 	identification.Household_Head,
        totalNumberOfHouseholdMembers: individual.Total_Number_of_Household,
        visit: interview.Visit,
        timeStart: interview.Time_Start,
        result: interview.Result,
        nameOfInterviewer: interview.Name_of_Interviewer_Initial_Date	,
        dateOfVisit: interview.Date_of_Visit,
        timeEnd: interview.Time_End,
        dateOfNextVisit: interview.Date_of_Next_Visit,
        nameOfSupervisor: interview.Name_of_Supervisor_Initial_Date,
        dateEncoded: encoding.Date_Encoded,
        nameAndInitialOfEncoder:  encoding.Name_and_Initial_of_Encoder	,
        nameOfSupervisorInitialAndDate:  encoding.Name_of_Supervisor_Initial_and_Date,
      };

      state.questions = {
        q1Surname:questionPartA.Q1_Surname,
        q1FirstName: questionPartA.Q1_Middle_Name,
        q1MiddleName: questionPartA.Q1_First_Name,
        q2: questionPartA.Q2,
        q3: questionPartA.Q3,
        q4: questionPartA.Q4,
        q5Month: questionPartA.Date_of_Birth_Month,
        q5Year: questionPartA.Date_of_Birth_Year,
        q6: questionPartA.Q6,
        q7: questionPartA.Q7,
        q8: questionPartA.Q8,
        q9: questionPartA.Q9,
        q10: questionPartA.Q10,
        q11: questionPartA.Q11,
        q12: questionPartA.Q12,
        q13: questionPartA.Q13,
        q14: questionPartA.Q14,
        q15: questionPartA.Q15,
        q16: questionPartA.Q16,
        q17: questionPartA.Q17,
        q18: questionPartA.Q18,
        q19: questionPartA.Q19,
        q20: questionPartA.Q20,
        q21: questionPartB.Q21,
        q22A: questionPartB.Q22_A,
        q22B: questionPartB.Q22_B,
        q23:  questionPartB.Q23,
        q24:  questionPartB.Q24,
        q25A: questionPartB.Q25_A,
        q25B: questionPartB.Q25_B,
        q26:  questionPartB.Q26,
        q27:  questionPartB.Q27,
        q28:  questionPartB.Q28,
        q29:  questionPartB.Q29,
        q30:  questionPartB.Q30,
        q31:  questionPartB.Q31,
        q32:  questionPartB.Q32,
        q33A: questionPartB.Q33_Barangay,
        q33B: questionPartB.Q33_Municipality,
        q34A: questionPartB.Q34_Barangay,
        q34B: questionPartB.Q34_Municipality,
        q35A: questionPartB.Q35_Year,
        q35B: questionPartB.Q35_Month,
        q36:  questionPartB.Q36,
        q37A: questionPartB.Q37_Month,
        q37B: questionPartB.Q37_Year,
        q38A: questionPartC.Q38_A,
        q38B: questionPartC.Q38_B,
        q38C: questionPartC.Q38_C,
        q39A: questionPartC.Q39_Month,
        q39B: questionPartC.Q39_Year,
        q40A: questionPartC.Q40_A,
        q40B: questionPartC.Q40_B,
        q40C: questionPartC.Q40C,
        q41:  questionPartC.Q41,
        q42A: questionPartC.Q42_A,
        q42B: questionPartC.Q42_B,
        q43: questionPartC.Q43,
        q44: questionPartC.Q44,
        q45: questionPartC.Q45,
        q46: questionPartC.Q46,
        q47: questionPartC.Q47,
        q48: questionPartC.Q48,
        q49: questionPartC.Q49,
        q50A: questionPartC.Q50_A,
        q50B: questionPartC.Q50_B,
        q51: 	questionPartC.Q51,
        q52: questionPartC.Q52,
        q53: questionPartC.Q53,
        q54Age: questionPartD.Q54_Age,
        q54CauseOfDeath: questionPartD.Q54_Cause_of_Death	,
        q55Age: questionPartD.Q55_Age,
        q55Sex: questionPartD.Q55_Sex,
        q55CauseOfDeath: questionPartD.Q55_Cause_of_Death	,
        q56A: questionPartD.Q56_A,
        q56B: questionPartD.Q56_B,
        q56C: questionPartD.Q56_C,
        q57A: questionPartD.Q57_A,
        q57B: questionPartD.Q57_B,
        q57C: questionPartD.Q57_C,
        q58Barangay: questionPartD.Q58_Barangay,
        q58Municipality: questionPartD.Q58_Municipality,
        q58Province: questionPartD.Q58_Province,
      };
    },
  },
});

export const {
  onChange,
  onChangeQuestions,
  submitToDatabase,
  onChangeImage,
  updateDatabase,
} = individualSlice.actions;
export default individualSlice.reducer;
