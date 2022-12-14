import React from "react";
import CanvasJSReact from "../canvasjs.react";
import { useSelector } from "react-redux";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartGender = () => {
  const gender = useSelector((state) => state.dashboard.gender);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Gender",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          {
            y: Math.floor((gender.male / (gender.male + gender.female)) * 100),
            label: "Male",
          },
          {
            y: Math.floor(
              (gender.female / (gender.male + gender.female)) * 100
            ),
            label: "Female",
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

export default ChartGender;
