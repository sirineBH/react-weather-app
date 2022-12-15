import React from "react";
import Plot from "react-plotly.js";

function Graph({ graphData }) {
  const axeX = [];
  const axeY = [];
  var i;
  for (i = 0; i < graphData.length; i++) {
    axeX.push(graphData[i][1]);
  }

  for (i = 0; i < graphData.length; i++) {
    axeY.push(graphData[i][2]);
  }

  return (
    <Plot
      data={[
        {
          type: "bar",
          x: axeX,
          y: axeY,
          marker: { color: "#52276b" },
        },
      ]}
      layout={{ width: 750, height: 500, title: "5 Days Forcast" }}
    />
  );
}

export default Graph;
