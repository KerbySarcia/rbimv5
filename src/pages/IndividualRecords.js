import React, { useState, useEffect } from "react";

import IndividualRecordLinks from "../components/IndividualRecordLinks";
import "../styles/IndividualRecord.css";
import { onChange } from "../features/IndividualRecordInputs";
import { useDispatch, useSelector } from "react-redux";

const IndividualRecord = () => {
  // TODO: Save inputted data to localstorage using useState, useEffect
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const individualRecord = useSelector((state) => state.individualRecord.value);
  console.log(individualRecord);
  useEffect(() => {
    const data = localStorage.getItem("user-answers");
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user-answers", JSON.stringify(items));
  });

  return (
    <div className="IndividualRecord">
      <IndividualRecordLinks />
      <div className="full__width IndividualRecord__column">
        <div className="IndividualRecord__Form__Container">
          <form action="" method="POST">
            <section className="IndividualRecord__sections IndividualRecord__row IndividualRecord__reverse-text">
              <div className="IndividualRecord__section__flex-wrap">
                <div className="IndividualRecord__input__box">
                  <label
                    for="recordNumber"
                    className="IndividualRecord__subtitle"
                  >
                    No:
                  </label>
                  <input
                    className="IndividualRecord__input"
                    type="number"
                    min="1"
                    name="recordNumber"
                    value={individualRecord.recordNumber}
                    onChange={(e) =>
                      dispatch(
                        onChange({ name: e.target.name, value: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__input__box">
                  <label for="household" className="IndividualRecord__subtitle">
                    Household:
                  </label>
                  <input
                    className="IndividualRecord__input"
                    type="text"
                    name="household"
                    value={individualRecord.household}
                    onChange={(e) =>
                      dispatch(
                        onChange({ name: e.target.name, value: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="IndividualRecord__input__box">
                  <label
                    for="institutionalLivingQuarter"
                    className="IndividualRecord__subtitle"
                  >
                    Institutional Living Quarter:
                  </label>
                  <input
                    className="IndividualRecord__input"
                    type="text"
                    name="institutionalLivingQuarter"
                    value={individualRecord.institutionalLivingQuarter}
                    onChange={(e) =>
                      dispatch(
                        onChange({ name: e.target.name, value: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="IndividualRecord__title__right">
                <h3>
                  Baseline Census for the Establishment of Registry of Barangay
                  Inhabitants and Migrants (RBIM)
                </h3>
              </div>
            </section>
            <section className="IndividualRecord__sections IndividualRecord__column">
              <h2>A. Identification</h2>
              <div className="IndividualRecord__input__container IndividualRecord__column ">
                <div className="IndividualRecord__row IndividualRecord__row-column">
                  <div className="IndividualRecord__input__box__1">
                    <label
                      for="province"
                      className="IndividualRecord__subtitle"
                    >
                      Province:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="province"
                      placeholder="e.g (Pampanga)"
                      value={individualRecord.province}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <label
                      for="municipality"
                      className="IndividualRecord__subtitle"
                    >
                      City/Municipality
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="municipality"
                      placeholder="e.g (San Fernando)"
                      value={individualRecord.municipality}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <label
                      for="barangay"
                      className="IndividualRecord__subtitle"
                    >
                      Barangay:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="barangay"
                      placeholder="e.g (San Juan)"
                      value={individualRecord.barangay}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <div className="IndividualRecord__input__box__1">
                    <label
                      for="nameOfRespondent"
                      className="IndividualRecord__subtitle"
                    >
                      Name of Respondent:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="nameOfRespondent"
                      placeholder="e.g (Juan Pedro)"
                      value={individualRecord.nameOfRespondent}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <label
                      for="householdHead"
                      className="IndividualRecord__subtitle"
                    >
                      Household Head
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="householdHead"
                      placeholder="e.g (Juan Pedro)"
                      value={individualRecord.householdHead}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <label
                      for="totalNumberOfHouseholdMembers"
                      className="IndividualRecord__subtitle"
                    >
                      Total No. of Household Members:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="number"
                      min="1"
                      name="totalNumberOfHouseholdMembers"
                      value={individualRecord.totalNumberOfHouseholdMembers}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="Individual__input__box__2 IndividualRecord__column">
                  <label for="address" className="IndividualRecord__subtitle">
                    Address:
                  </label>
                  <div className="IndividualRecord__row IndividualRecord__row-column">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="addressRoom"
                      placeholder="(Room/Floor/Unit No. and Building Name)"
                      value={individualRecord.addressRoom}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(House/Lot and Block No.)"
                      name="addressHouse"
                      value={individualRecord.addressHouse}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(Street Name)"
                      name="addressStreet"
                      value={individualRecord.addressStreet}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="IndividualRecord__sections IndividualRecord__column ">
              <h2>B. Interview Information</h2>
              <div className="IndividualRecord__input__container IndividualRecord__row IndividualRecord__column-responsive">
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Visit</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="visit"
                      value={individualRecord.visit}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Date of Visit</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      name="dateOfVisit"
                      type="date"
                      value={individualRecord.dateOfVisit}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Time Start</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="time"
                      name="timeStart"
                      value={individualRecord.timeStart}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="timeEnd">Time End</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="time"
                      name="timeEnd"
                      value={individualRecord.timeEnd}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="result">Result</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(C, CB, R)"
                      name="result"
                      value={individualRecord.result}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="dateOfNextVisit">Date of Next Visit</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="date"
                      name="dateOfNextVisit"
                      value={individualRecord.dateOfNextVisit}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="nameOfInterviewer">
                      Name of Interviewer, Initial/Date
                    </label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Pablo, L / mm/dd/yyyy)"
                      value={individualRecord.nameOfInterviewer}
                      name="nameOfInterviewer"
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="nameOfSupervisor">
                      Name of Supervisor, Initial/Date
                    </label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Escobar, P / mm/dd/yyyy)"
                      name="nameOfSupervisor"
                      value={individualRecord.nameOfSupervisor}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="IndividualRecord__sections IndividualRecord__column">
              <h2>C. Encoding Information</h2>
              <div className="IndividualRecord__input__container IndividualRecord__row IndividualRecord__responsive">
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="dateEncoded">Date Encoded</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="date"
                      name="dateEncoded"
                      value={individualRecord.dateEncoded}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="nameAndInitialOfEncoder">
                      Name and Initial of Encoder
                    </label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Pablo, L)"
                      name="nameAndInitialOfEncoder"
                      value={individualRecord.nameAndInitialOfEncoder}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="nameOfSupervisorInitialAndDate">
                      Name of Supervisor, Initial and Date
                    </label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Escobar, P / mm/dd/yyyy)"
                      name="nameOfSupervisorInitialAndDate"
                      value={individualRecord.nameOfSupervisorInitialAndDate}
                      onChange={(e) =>
                        dispatch(
                          onChange({
                            name: e.target.name,
                            value: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualRecord;
