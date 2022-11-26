import React from "react";
import "../styles/IndividualRecord.css";
import IndividualRecordLinks from "../components/IndividualRecordLinks";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { onChangeQuestions } from "../features/IndividualRecordInputs";

const IndividualRecordsQuestions = () => {
  const questions = useSelector((state) => state.individualRecord.questions);
  const dispatch = useDispatch();
  console.log(questions);
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
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q28. Reason of Visit</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q29. Disability</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q30. Solo Parent</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q31. Registered Senior Citizen:</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <label>Q32. Registed Voter</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q33. Previous Residence (Within Five Years Ago)</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(Barangay)"
                    ></input>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(Municipality)"
                    ></input>
                  </div>
                  <label>Q34. Previous Residence (Within Six Months Ago)</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(Barangay)"
                    ></input>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(Municipality)"
                    ></input>
                  </div>
                  <label>Q35. Length of Stay in Barangay</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(No. of Years)"
                    ></input>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(No. of Months)"
                    ></input>
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q36. Type of Resident</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q37. Date of Transfer</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(MM Month)"
                    ></input>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(YYYY Years)"
                    ></input>
                  </div>
                  <label>
                    Q38A. Reasons for leaving the previous residence
                  </label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <label>
                    Q38B. Reasons for leaving the previous residence
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q38C. Reasons for leaving the previous residence
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>Q39. Return to Previous Residence</label>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(MM Month)"
                    ></input>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder="(YYYY Year)"
                    ></input>
                  </div>
                  <label>Q40A. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q40B. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q40C. Reason for transfering in this barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q41. Duration of stay current barangay</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q42A. CTC information: Does ____ have a valid CTC
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q42B. CTC information: Was the CTC issued in this barangay?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q43. Skills Development Training</label>
                  <textarea
                    className="IndividualRecord__text__area"
                    name=""
                    placeholder=""
                    rows="5"
                  ></textarea>
                  <label>Q44. Skills</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    placeholder=""
                  ></input>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q45. Do you own or amortize this housing unit occupied by
                    your household or do you rent it, do you occupy it rent free
                    with consent of owner or ren-free without consent of owner?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q46. Do you own or amortize this lot occupied by your
                    household or do you rent it, do you occupy it rent free with
                    consent of owner or ren-free without consent of owner?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q47. What type of fuel does this household use for lighting?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q48. What kind of fuel does this household use most of the
                    time for cooking?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q49. What is the household's main source of drinking water?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q50A. How does your household usually dispose of your
                    kitchen garbage such as leftover food, peeling of fruits and
                    vegetables, fish and chicken entrails and others?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q50B. Do you segregate Garbage?</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q51. What type of toilet facility does this household use?
                  </label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q52. Type of Building/House</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Q53. Construction Materials of the outer wall</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
              </section>
              <section className="IndividualRecord__sections IndividualRecord__row">
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q54. Do you have any female HH members who died in the past
                    12 months? How old is she and what is the cause of her
                    death?
                  </label>
                  <label>Age:</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Cause of Death:</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>
                    Q55. Do you have a child HH member below 5 years old who
                    died in the past 12 months? how old is she/he what is the
                    cause of her/his death?
                  </label>
                  <label>Age:</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Sex:</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                  <label>Cause of Death:</label>
                  <input
                    className="IndividualRecord__input"
                    name=""
                    type="text"
                    placeholder=""
                  ></input>
                </div>
                <div className="IndividualRecord__Questions__Row IndividualRecord__column">
                  <label>
                    Q56. What are the common diseases that cause death in the
                    barangay?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>1.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>2.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>3.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <label>
                    Q57. What do you think are the primary needs of this
                    barangay?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>1.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>2.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>3.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <label>
                    Q58. Where does your household intend to stay five years
                    from now?
                  </label>
                  <div className="IndividualRecord__row">
                    <label>Barangay.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>Municipality.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="IndividualRecord__row">
                    <label>Province.</label>
                    <input
                      className="IndividualRecord__input"
                      name=""
                      type="text"
                      placeholder=""
                    ></input>
                  </div>
                </div>
                <div className="IndividualRecord__Questions__Row">
                  <div className="IndividualRecord__finish">
                    <button className="danger__btn">Cancel</button>
                    <button className="confirm__btn">Save</button>
                  </div>
                </div>
              </section>
              <Modal>
                <h1 className="modal__upload__label">Hello World!</h1>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualRecordsQuestions;
