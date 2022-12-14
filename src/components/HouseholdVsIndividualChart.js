import React from "react";
import CanvasJSReact from "../canvasjs.react";
import { useSelector } from "react-redux";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HouseholdVsIndividualChart = () => {
  const householdVsIndi = useSelector(
    (state) => state.dashboard.householdVsIndividual
  );
  console.log(householdVsIndi);
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Household Record vs Individual",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          {
            y: Math.floor(
              (householdVsIndi.individual.count /
                (householdVsIndi.individual.count +
                  householdVsIndi.household.count)) *
                100
            ),
            label: "Individual Record",
          },
          {
            y: Math.floor(
              (householdVsIndi.household.count /
                (householdVsIndi.individual.count +
                  householdVsIndi.household.count)) *
                100
            ),
            label: "Household Record",
          },
        ],
      },
    ],
  };
  return (
    <CanvasJSChart
      options={options}
      /* onRef={ref => this.chart = ref} */
    />
  );
};

export default HouseholdVsIndividualChart;
