import React from "react";
import CanvasJSReact from "../canvasjs.react";
import { useSelector } from "react-redux";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartGender = () => {
  const gender = useSelector((state) => state.dashboard.gender);
  console.log(gender);
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Packing Gender",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: gender.male, label: "Male" },
          { y: gender.female, label: "Female" },
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

export default ChartGender;
