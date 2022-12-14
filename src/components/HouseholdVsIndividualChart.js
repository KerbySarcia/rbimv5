import React from "react";
import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HouseholdVsIndividualChart = () => {
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
          { y: 70, label: "Household Record" },
          { y: 30, label: "Indivual Household" },
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
