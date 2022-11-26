import React from "react";
import "../styles/HouseholdRecord.css";
import HouseholdRecordLinks from "../components/HouseholdRecordLinks";

const HouseholdRecord = () => {
  return (
    <div className="IndividualRecord">
      <div className="full__width IndividualRecord__column">
        <HouseholdRecordLinks />
        <div className="IndividualRecord__Form__Container">
          <form action="" method="POST">
            <section className="IndividualRecord__sections IndividualRecord__row IndividualRecord__reverse-text">
              <div className="IndividualRecord__section__flex-wrap">
                <div className="IndividualRecord__input__box">
                  <label
                    for="record-number"
                    className="IndividualRecord__subtitle"
                  >
                    No:
                  </label>
                  <input
                    className="IndividualRecord__input"
                    type="number"
                    min="1"
                    name="record-number"
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
                  />
                </div>
                <div className="IndividualRecord__input__box">
                  <label
                    for="instit-quarter"
                    className="IndividualRecord__subtitle"
                  >
                    Institutional Living Quarter:
                  </label>
                  <input
                    className="IndividualRecord__input"
                    type="text"
                    name="instit-quarter"
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
                    />
                  </div>
                  <div className="IndividualRecord__input__box__1">
                    <label
                      for="province"
                      className="IndividualRecord__subtitle"
                    >
                      Name of Respondent:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="province"
                      placeholder="e.g (Juan Pedro)"
                    />
                    <label
                      for="municipality"
                      className="IndividualRecord__subtitle"
                    >
                      Household Head
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      name="municipality"
                      placeholder="e.g (Juan Pedro)"
                    />
                    <label
                      for="barangay"
                      className="IndividualRecord__subtitle"
                    >
                      Total No. of Household Members:
                    </label>
                    <input
                      className="IndividualRecord__input"
                      type="number"
                      min="1"
                      name="barangay-members"
                      value="1"
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
                      placeholder="(Room/Floor/Unit No. and Building Name)"
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(House/Lot and Block No.)"
                    />
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(Street Name)"
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
                    <input className="IndividualRecord__input" type="text" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Date of Visit</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input className="IndividualRecord__input" type="date" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Time Start</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input className="IndividualRecord__input" type="time" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Time End</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input className="IndividualRecord__input" type="time" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Result</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(C, CB, R)"
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Date of Next Visit</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input className="IndividualRecord__input" type="date" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Name of Interviewer, Initial/Date</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Pablo, L / mm/dd/yyyy)"
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Name of Supervisor, Initial/Date</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Escobar, P / mm/dd/yyyy)"
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
                    <label for="visit">Date Encoded</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input className="IndividualRecord__input" type="date" />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">Name and Initial of Encoder</label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Pablo, L)"
                    />
                  </div>
                </div>
                <div className="IndividualRecord__input__box__2 IndividualRecord__column">
                  <div className="IndividualRecord__row">
                    <label for="visit">
                      Name of Supervisor, Initial and Date
                    </label>
                  </div>
                  <div className="IndividualRecord__row">
                    <input
                      className="IndividualRecord__input"
                      type="text"
                      placeholder="(e.g Escobar, P / mm/dd/yyyy)"
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

export default HouseholdRecord;
