import React from "react";

import CanvasJSReact from "../canvasjs.react";
//var CanvasJSReact = require("./canvasjs.react");
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartPopulation = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Population of Fucking Minions",
    },
    axisY: {
      title: "Mga Bilang",
      logarithmic: true,
    },
    data: [
      {
        type: "spline",
        // showInLegend: true,
        // legendText: "MWp = one megawatt peak",
        dataPoints: [
          { x: new Date(2001, 0), y: 1615 },
          { x: new Date(2002, 0), y: 2069 },
          { x: new Date(2003, 0), y: 2635 },
          { x: new Date(2004, 0), y: 3723 },
          { x: new Date(2005, 0), y: 5112 },
          { x: new Date(2006, 0), y: 6660 },
          { x: new Date(2007, 0), y: 9183 },
          { x: new Date(2008, 0), y: 15844 },
          { x: new Date(2009, 0), y: 23185 },
          { x: new Date(2010, 0), y: 40336 },
          { x: new Date(2011, 0), y: 70469 },
          { x: new Date(2012, 0), y: 100504 },
          { x: new Date(2013, 0), y: 138856 },
          { x: new Date(2014, 0), y: 178391 },
          { x: new Date(2015, 0), y: 229300 },
          { x: new Date(2016, 0), y: 302300 },
          { x: new Date(2017, 0), y: 405000 },
        ],
      },
    ],
  };
  return (
    <CanvasJSChart
      options={options}
      /* onRef = {ref => this.chart = ref} */
    />
  );
};

export default ChartPopulation;
