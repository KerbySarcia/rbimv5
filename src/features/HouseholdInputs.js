import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const questionTemplate = {
  num: 1,
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
    isContain: false,
    isUpdateChangeHousehold: false,
    updateHolderHousehold: "",
    updateHolderList: [],
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
      totalNumberOfHouseholdMembers: "2",
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
      state.isContain = true;
      state.value[action.payload.name] = action.payload.value;
      for (const properties in state.value) {
        if (state.value[properties] === "") {
          state.isEmpty = true;
          return;
        }
      }
      state.isEmpty = false;

      if (state.value.id) {
        for (const props in state.value) {
          if (
            state.value[props] !== state.updateHolderHousehold[props] &&
            state.value[props] !== ""
          ) {
            state.isUpdateChangeHousehold = true;

            return;
          }
        }
        state.isUpdateChangeHousehold = false;
      }
    },
    onChangeQuestions: (state, action) => {
      state.isContain = true;
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
        (item) => item.num !== action.payload.id
      );

      state.individual.push(state.questions);

      for (let i = 0; i < state.individual.length; i++) {
        const temp = state.individual[i];
        const tempUpdate = state.updateHolderList[i];

        for (const props in temp) {
          if (temp[props] !== tempUpdate[props] && temp[props] !== "") {
            state.isUpdateChangeHousehold = true;
            return;
          }
        }
        state.isUpdateChangeHousehold = false;
      }

      state.questions = questionTemplate;
    },
    questionModal: (state, action) => {
      const temp = state.individual.filter(
        (item) => item.num === action.payload.id
      );
      state.questions = temp[0];
    },
    deleteHouseholdRecord: (state, action) => {
      state.individual = state.individual.filter(
        (item) => item.num !== action.payload.id
      );
    },
    submitToDatabase: (state, action) => {
      console.log({
        householdRecord: action.payload.householdRecord,
        householdRecordList: action.payload.individual,
      });
      state.isContain = false;

      axios.post("http://localhost:80/rbimv5/server/Household_Record.php", {
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
        totalNumberOfHouseholdMembers: "2",
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
      state.questions.num = `${state.questions.num + state.individual.length}${
        state.questions.q1FirstName
      }${state.questions.q1Surname}${state.questions.q5Year}`;

      if (state.value.id) {
        state.individual.push({
          id: state.value.id,
          newRecord: true,
          ...state.questions,
        });
        state.value = {
          ...state.value,
          totalNumberOfHouseholdMembers: state.individual.length,
        };
      } else {
        state.individual.push(state.questions);

        state.value = {
          ...state.value,
          totalNumberOfHouseholdMembers: state.individual.length,
        };
      }

      state.questions = questionTemplate;
    },
    decrementHousehold: (state, action) => {
      state.value = {
        ...state.value,
        totalNumberOfHouseholdMembers:
          state.value.totalNumberOfHouseholdMembers - 1,
      };
    },
    onClickContain: (state, action) => {
      state.isContain = action.payload.isCon;
    },
    defaultValueHousehold: (state, action) => {
      state.isContain = false;
      state.individual = [];
      state.questions = questionTemplate;
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
        totalNumberOfHouseholdMembers: "2",
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
    },
    updateHouseholdDB: (state, action) => {
      state.isUpdateChangeHousehold = false;
      state.isContain = true;
      const individual = action.payload.data.individual[0];
      const encoding = action.payload.data.encoding[0];
      const identification = action.payload.data.identification[0];
      const interview = action.payload.data.interview[0];

      state.value = {
        id: individual.id,
        recordNumber: individual.NO,
        household: individual.Household,
        institutionalLivingQuarter: individual.Institutional_Living_Quarter,
        province: identification.Province,
        municipality: identification.City_Municipality,
        barangay: identification.Barangay,
        addressRoom: identification.Address_A,
        addressHouse: identification.Address_B,
        addressStreet: identification.Address_C,
        nameOfRespondent: identification.Name_of_Respondent,
        householdHead: identification.Household_Head,
        totalNumberOfHouseholdMembers: individual.Total_Number_of_Household,
        visit: interview.Visit,
        timeStart: interview.Time_Start,
        result: interview.Result,
        nameOfInterviewer: interview.Name_of_Interviewer_Initial_Date,
        dateOfVisit: interview.Date_of_Visit,
        timeEnd: interview.Time_End,
        dateOfNextVisit: interview.Date_of_Next_Visit,
        nameOfSupervisor: interview.Name_of_Supervisor_Initial_Date,
        dateEncoded: encoding.Date_Encoded,
        nameAndInitialOfEncoder: encoding.Name_and_Initial_of_Encoder,
        nameOfSupervisorInitialAndDate:
          encoding.Name_of_Supervisor_Initial_and_Date,
      };

      state.updateHolderHousehold = {
        id: individual.id,
        recordNumber: individual.NO,
        household: individual.Household,
        institutionalLivingQuarter: individual.Institutional_Living_Quarter,
        province: identification.Province,
        municipality: identification.City_Municipality,
        barangay: identification.Barangay,
        addressRoom: identification.Address_A,
        addressHouse: identification.Address_B,
        addressStreet: identification.Address_C,
        nameOfRespondent: identification.Name_of_Respondent,
        householdHead: identification.Household_Head,
        totalNumberOfHouseholdMembers: individual.Total_Number_of_Household,
        visit: interview.Visit,
        timeStart: interview.Time_Start,
        result: interview.Result,
        nameOfInterviewer: interview.Name_of_Interviewer_Initial_Date,
        dateOfVisit: interview.Date_of_Visit,
        timeEnd: interview.Time_End,
        dateOfNextVisit: interview.Date_of_Next_Visit,
        nameOfSupervisor: interview.Name_of_Supervisor_Initial_Date,
        dateEncoded: encoding.Date_Encoded,
        nameAndInitialOfEncoder: encoding.Name_and_Initial_of_Encoder,
        nameOfSupervisorInitialAndDate:
          encoding.Name_of_Supervisor_Initial_and_Date,
      };

      for (let i = 0; i < action.payload.data.individuals.length; i++) {
        const temp = action.payload.data.individuals[i];
        const partA = temp[0];
        const partB = temp[1];
        const partC = temp[2];
        const partD = temp[3];

        const questionHolder = {
          id: partA.id,
          num: partA.num,
          q1Surname: partA.Q1_Surname,
          q1FirstName: partA.Q1_Middle_Name,
          q1MiddleName: partA.Q1_First_Name,
          q2: partA.Q2,
          q3: partA.Q3,
          q4: partA.Q4,
          q5Month: partA.Date_of_Birth_Month,
          q5Year: partA.Date_of_Birth_Year,
          q6: partA.Q6,
          q7: partA.Q7,
          q8: partA.Q8,
          q9: partA.Q9,
          q10: partA.Q10,
          q11: partA.Q11,
          q12: partA.Q12,
          q13: partA.Q13,
          q14: partA.Q14,
          q15: partA.Q15,
          q16: partA.Q16,
          q17: partA.Q17,
          q18: partA.Q18,
          q19: partA.Q19,
          q20: partA.Q20,
          q21: partB.Q21,
          q22A: partB.Q22_A,
          q22B: partB.Q22_B,
          q23: partB.Q23,
          q24: partB.Q24,
          q25A: partB.Q25_A,
          q25B: partB.Q25_B,
          q26: partB.Q26,
          q27: partB.Q27,
          q28: partB.Q28,
          q29: partB.Q29,
          q30: partB.Q30,
          q31: partB.Q31,
          q32: partB.Q32,
          q33A: partB.Q33_Barangay,
          q33B: partB.Q33_Municipality,
          q34A: partB.Q34_Barangay,
          q34B: partB.Q34_Municipality,
          q35A: partB.Q35_Year,
          q35B: partB.Q35_Month,
          q36: partB.Q36,
          q37A: partB.Q37_Month,
          q37B: partB.Q37_Year,
          q38A: partC.Q38_A,
          q38B: partC.Q38_B,
          q38C: partC.Q38_C,
          q39A: partC.Q39_Month,
          q39B: partC.Q39_Year,
          q40A: partC.Q40_A,
          q40B: partC.Q40_B,
          q40C: partC.Q40C,
          q41: partC.Q41,
          q42A: partC.Q42_A,
          q42B: partC.Q42_B,
          q43: partC.Q43,
          q44: partC.Q44,
          q45: partC.Q45,
          q46: partC.Q46,
          q47: partC.Q47,
          q48: partC.Q48,
          q49: partC.Q49,
          q50A: partC.Q50_A,
          q50B: partC.Q50_B,
          q51: partC.Q51,
          q52: partC.Q52,
          q53: partC.Q53,
          q54Age: partD.Q54_Age,
          q54CauseOfDeath: partD.Q54_Cause_of_Death,
          q55Age: partD.Q55_Age,
          q55Sex: partD.Q55_Sex,
          q55CauseOfDeath: partD.Q55_Cause_of_Death,
          q56A: partD.Q56_A,
          q56B: partD.Q56_B,
          q56C: partD.Q56_C,
          q57A: partD.Q57_A,
          q57B: partD.Q57_B,
          q57C: partD.Q57_C,
          q58Barangay: partD.Q58_Barangay,
          q58Municipality: partD.Q58_Municipality,
          q58Province: partD.Q58_Province,
        };
        state.updateHolderList.push(questionHolder);
        state.individual.push(questionHolder);
      }
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
  updateHouseholdDB,
  defaultValueHousehold,
  decrementHousehold,
  onClickContain,
} = HouseholdSlice.actions;
export default HouseholdSlice.reducer;
