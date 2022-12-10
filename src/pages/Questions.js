import React from "react";
import "../styles/IndividualRecord.css";
import IndividualRecordLinks from "../components/IndividualRecordLinks";
import { useSelector, useDispatch } from "react-redux";
import {
  onChangeQuestions,
  submitToDatabase,
  defaultValue,
  updateTable,
} from "../features/IndividualRecordInputs";
import { useNavigate } from "react-router-dom";

const IndividualRecordsQuestions = () => {
  const questions = useSelector((state) => state.individualRecord.questions);
  const individualRecordValue = useSelector(
    (state) => state.individualRecord.value
  );
  const imageInformation = useSelector(
    (state) => state.individualRecord.imageInformation
  );
  const imageFileName = useSelector(
    (state) => state.individualRecord.imageFileName
  );

  const isEmpty = useSelector((state) => state.individualRecord.isEmpty);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="IndividualRecord">
        <div className="full__width IndividualRecord__column">
          <IndividualRecordLinks />
          <div className="IndividualRecord__Questions__Container">
            <form action="" method="POST">
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q1. Name:</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q1Surname"
                      value={questions.q1Surname}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                      type="text"
                      placeholder="Surname"
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="First Name"
                      name="q1FirstName"
                      value={questions.q1FirstName}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="Middle Name"
                      name="q1MiddleName"
                      value={questions.q1MiddleName}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q2. Relationship with the Household Head</label>
                  <input
                    className="IndividualRecord__input"
                    name="q2"
                    type="text"
                    placeholder=""
                    value={questions.q2}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q3. Sex</label>
                  <input
                    className="IndividualRecord__input"
                    name="q3"
                    type="text"
                    placeholder="Male or Female"
                    value={questions.q3}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q4. Age</label>
                  <input
                    className="IndividualRecord__input"
                    name="q4"
                    type="text"
                    placeholder=""
                    value={questions.q4}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q5. Date of Birth</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q5Month"
                      type="text"
                      placeholder="Month(MM)"
                      value={questions.q5Month}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q5Year"
                      type="text"
                      placeholder="Year(YYYY)"
                      value={questions.q5Year}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q6. Place of Birth</label>
                  <input
                    className="IndividualRecord__input"
                    name="q6"
                    type="text"
                    placeholder=""
                    value={questions.q6}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q7. Nationality</label>
                  <input
                    className="IndividualRecord__input"
                    name="q7"
                    type="text"
                    placeholder=""
                    value={questions.q7}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q8. Marital Status</label>
                  <input
                    className="IndividualRecord__input"
                    name="q8"
                    type="text"
                    placeholder=""
                    value={questions.q8}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q9. Religion</label>
                  <input
                    className="IndividualRecord__input"
                    name="q9"
                    type="text"
                    placeholder=""
                    value={questions.q9}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q10. Ethnicity</label>
                  <input
                    className="IndividualRecord__input"
                    name="q10"
                    type="text"
                    placeholder=""
                    value={questions.q10}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q11. Highest Level of Education Completed</label>
                  <input
                    className="IndividualRecord__input"
                    name="q11"
                    type="text"
                    placeholder=""
                    value={questions.q11}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q12. Currently Enrolled</label>
                  <input
                    className="IndividualRecord__input"
                    name="q12"
                    type="text"
                    placeholder=""
                    value={questions.q12}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q13. Type of School</label>
                  <input
                    className="IndividualRecord__input"
                    name="q13"
                    type="text"
                    placeholder=""
                    value={questions.q13}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q14. Place of School</label>
                  <input
                    className="IndividualRecord__input"
                    name="q14"
                    type="text"
                    placeholder=""
                    value={questions.q14}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q15. Monthly Income:</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q15"
                      type="text"
                      placeholder=""
                      value={questions.q15}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q16. Source of Income</label>
                  <input
                    className="IndividualRecord__input"
                    name="q16"
                    type="text"
                    placeholder=""
                    value={questions.q16}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q17. Status of Work/Business</label>
                  <input
                    className="IndividualRecord__input"
                    name="q17"
                    type="text"
                    placeholder=""
                    value={questions.q17}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q18. Place of Work</label>
                  <input
                    className="IndividualRecord__input"
                    name="q18"
                    type="text"
                    placeholder=""
                    value={questions.q18}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q19. Place of Delivery</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q19"
                      type="text"
                      placeholder=""
                      value={questions.q19}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q20. Person who Assisted the Delivery</label>
                  <input
                    className="IndividualRecord__input"
                    name="q20"
                    type="text"
                    placeholder=""
                    value={questions.q20}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q21. Immunization</label>
                  <input
                    className="IndividualRecord__input"
                    name="q21"
                    type="text"
                    placeholder=""
                    value={questions.q21}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q22. Living Children</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q22A"
                      type="text"
                      placeholder=""
                      value={questions.q22A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q22B"
                      type="text"
                      placeholder=""
                      value={questions.q22B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q23. FP Method</label>
                  <input
                    className="IndividualRecord__input"
                    name="q23"
                    type="text"
                    placeholder=""
                    value={questions.q23}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q24. Source of FP</label>
                  <input
                    className="IndividualRecord__input"
                    name="q24"
                    type="text"
                    placeholder=""
                    value={questions.q24}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q25. Intention ot Use FP</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q25A"
                      type="text"
                      placeholder=""
                      value={questions.q25A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q25B"
                      type="text"
                      placeholder=""
                      value={questions.q25B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q26. Health Insurance</label>
                  <input
                    className="IndividualRecord__input"
                    name="q26"
                    type="text"
                    placeholder=""
                    value={questions.q26}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  ></input>
                  <label>Q27. Facility Visited</label>
                  <input
                    className="IndividualRecord__input"
                    name="q27"
                    type="text"
                    placeholder=""
                    value={questions.q27}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q28. Reason of Visit</label>
                  <input
                    className="IndividualRecord__input"
                    name="q28"
                    type="text"
                    placeholder=""
                    value={questions.q28}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q29. Disability</label>
                  <input
                    className="IndividualRecord__input"
                    name="q29"
                    type="text"
                    placeholder=""
                    value={questions.q29}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q30. Solo Parent</label>
                  <input
                    className="IndividualRecord__input"
                    name="q30"
                    type="text"
                    placeholder=""
                    value={questions.q30}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q31. Registered Senior Citizen:</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q31"
                      type="text"
                      placeholder=""
                      value={questions.q31}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q32. Registed Voter</label>
                  <input
                    className="IndividualRecord__input"
                    name="q32"
                    type="text"
                    placeholder=""
                    value={questions.q32}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q33. Previous Residence (Within Five Years Ago)</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q33A"
                      type="text"
                      placeholder="(Barangay)"
                      value={questions.q33A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q33B"
                      type="text"
                      placeholder="(Municipality)"
                      value={questions.q33B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q34. Previous Residence (Within Six Months Ago)</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q34A"
                      type="text"
                      placeholder="(Barangay)"
                      value={questions.q34A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q34B"
                      type="text"
                      placeholder="(Municipality)"
                      value={questions.q34B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q35. Length of Stay in Barangay</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q35A"
                      type="text"
                      placeholder="(No. of Years)"
                      value={questions.q35A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q35B"
                      type="text"
                      placeholder="(No. of Months)"
                      value={questions.q35B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q36. Type of Resident</label>
                  <input
                    className="IndividualRecord__input"
                    name="q36"
                    type="text"
                    placeholder=""
                    value={questions.q36}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q37. Date of Transfer</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q37A"
                      type="text"
                      placeholder="(MM Month)"
                      value={questions.q37A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q37B"
                      type="text"
                      placeholder="(YYYY Years)"
                      value={questions.q37B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>
                    Q38A. Reasons for leaving the previous residence
                  </label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q38A"
                      type="text"
                      placeholder=""
                      value={questions.q38A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>
                    Q38B. Reasons for leaving the previous residence
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q38B"
                    type="text"
                    placeholder=""
                    value={questions.q38B}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q38C. Reasons for leaving the previous residence
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q38C"
                    type="text"
                    placeholder=""
                    value={questions.q38C}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q39. Return to Previous Residence</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="q39A"
                      type="text"
                      placeholder="(MM Month)"
                      value={questions.q39A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      name="q39B"
                      type="text"
                      placeholder="(YYYY Year)"
                      value={questions.q39B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>Q40A. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name="q40A"
                    type="text"
                    placeholder=""
                    value={questions.q40A}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q40B. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name="q40B"
                    type="text"
                    placeholder=""
                    value={questions.q40B}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q40C. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name="q40C"
                    type="text"
                    placeholder=""
                    value={questions.q40C}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q41. Duration of stay current barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name="q41"
                    type="text"
                    placeholder=""
                    value={questions.q41}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q42A. CTC information: Does ____ have a valid CTC
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q42A"
                    type="text"
                    placeholder=""
                    value={questions.q42A}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q42B. CTC information: Was the CTC issued in this barangay?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q42B"
                    type="text"
                    placeholder=""
                    value={questions.q42B}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q43. Skills Development Training</label>
                  <textarea
                    className="IndividualRecord__text__area"
                    name="q43"
                    placeholder=""
                    rows="5"
                    value={questions.q43}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  ></textarea>
                  <label>Q44. Skills</label>
                  <input
                    className="IndividualRecord__input"
                    name="q44"
                    placeholder=""
                    value={questions.q44}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q45. Do you own or amortize this housing unit occupied by
                    your household or do you rent it, do you occupy it rent free
                    with consent of owner or ren-free without consent of owner?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q45"
                    type="text"
                    placeholder=""
                    value={questions.q45}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  ></input>
                  <label>
                    Q46. Do you own or amortize this lot occupied by your
                    household or do you rent it, do you occupy it rent free with
                    consent of owner or ren-free without consent of owner?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q46"
                    type="text"
                    placeholder=""
                    value={questions.q46}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q47. What type of fuel does this household use for lighting?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q47"
                    type="text"
                    placeholder=""
                    value={questions.q47}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q48. What kind of fuel does this household use most of the
                    time for cooking?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q48"
                    type="text"
                    placeholder=""
                    value={questions.q48}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q49. What is the household's main source of drinking water?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q49"
                    type="text"
                    placeholder=""
                    value={questions.q49}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q50A. How does your household usually dispose of your
                    kitchen garbage such as leftover food, peeling of fruits and
                    vegetables, fish and chicken entrails and others?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q50A"
                    type="text"
                    placeholder=""
                    value={questions.q50A}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q50B. Do you segregate Garbage?</label>
                  <input
                    className="IndividualRecord__input"
                    name="q50B"
                    type="text"
                    placeholder=""
                    value={questions.q50B}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q51. What type of toilet facility does this household use?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name="q51"
                    type="text"
                    placeholder=""
                    value={questions.q51}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q52. Type of Building/House</label>
                  <input
                    className="IndividualRecord__input"
                    name="q52"
                    type="text"
                    placeholder=""
                    value={questions.q52}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Q53. Construction Materials of the outer wall</label>
                  <input
                    className="IndividualRecord__input"
                    name="q53"
                    type="text"
                    placeholder=""
                    value={questions.q53}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row IndividualRecord__grid">
                <div className="">
                  <label>
                    Q54. Do you have any female HH members who died in the past
                    12 months? How old is she and what is the cause of her
                    death?
                  </label>
                  <label>Age:</label>
                  <input
                    className="IndividualRecord__input"
                    name="q54Age"
                    type="text"
                    placeholder=""
                    value={questions.q54Age}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Cause of Death:</label>
                  <input
                    className="IndividualRecord__input"
                    name="q54CauseOfDeath"
                    type="text"
                    placeholder=""
                    value={questions.q54CauseOfDeath}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>
                    Q55. Do you have a child HH member below 5 years old who
                    died in the past 12 months? how old is she/he what is the
                    cause of her/his death?
                  </label>
                  <label>Age:</label>
                  <input
                    className="IndividualRecord__input"
                    name="q55Age"
                    type="text"
                    placeholder=""
                    value={questions.q55Age}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Sex:</label>
                  <input
                    className="IndividualRecord__input"
                    name="q55Sex"
                    type="text"
                    placeholder=""
                    value={questions.q55Sex}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                  <label>Cause of Death:</label>
                  <input
                    className="IndividualRecord__input"
                    name="q55CauseOfDeath"
                    type="text"
                    placeholder=""
                    value={questions.q55CauseOfDeath}
                    onChange={(e) =>
                      dispatch(
                        onChangeQuestions({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div className="">
                  <label>
                    Q56. What are the common diseases that cause death in the
                    barangay?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>1.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q56A"
                      type="text"
                      placeholder=""
                      value={questions.q56A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>2.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q56B"
                      type="text"
                      placeholder=""
                      value={questions.q56B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>3.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q56C"
                      type="text"
                      placeholder=""
                      value={questions.q56C}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>
                    Q57. What do you think are the primary needs of this
                    barangay?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>1.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q57A"
                      type="text"
                      placeholder=""
                      value={questions.q57A}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>2.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q57B"
                      type="text"
                      placeholder=""
                      value={questions.q57B}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>3.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q57C"
                      type="text"
                      placeholder=""
                      value={questions.q57C}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <label>
                    Q58. Where does your household intend to stay five years
                    from now?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>Barangay.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q58Barangay"
                      type="text"
                      placeholder=""
                      value={questions.q58Barangay}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>Municipality.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q58Municipality"
                      type="text"
                      placeholder=""
                      value={questions.q58Municipality}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__row">
                    <label>Province.</label>
                    <input
                      className="IndividualRecord__input"
                      name="q58Province"
                      type="text"
                      placeholder=""
                      value={questions.q58Province}
                      onChange={(e) =>
                        dispatch(
                          onChangeQuestions({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </section>
            </form>
            <div
              className={`${
                isEmpty.isEmptyQuestions ||
                isEmpty.isEmptyIndividualRecordQuestions ||
                isEmpty.isEmptyImageInformation
                  ? "IndividualRecord__button__add__disabled"
                  : ""
              } IndividualRecord__button__add`}
            >
              {individualRecordValue.id ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      updateTable({
                        id: individualRecordValue.id,
                        questions: questions,
                        individualRecord: individualRecordValue,
                      })
                    );
                    dispatch(defaultValue());
                    navigate("/reports");
                  }}
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(
                      submitToDatabase({
                        questions,
                        individualRecordValue,
                        imageFileName,
                      })
                    );
                    navigate("/individual-records");
                  }}
                >
                  Submit
                </button>
              )}
            </div>
            {individualRecordValue.id && (
              <button
                onClick={() => {
                  dispatch(defaultValue());
                  navigate("/reports");
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualRecordsQuestions;
