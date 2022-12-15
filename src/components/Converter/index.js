import React from "react";

import { Content } from "./Converter.styles";

function Converter({ unit, setUnit, weatherData }) {
  // Convert units :  Celcius <-> Fahrenheit
  const convert = () => {
    for (var i = 0; i < weatherData.length; i++) {
      if (unit === "C") {
        const newT = weatherData[i][2] * 1.8 + 32;
        weatherData[i][8] = newT.toFixed(1);
        weatherData[i][6] = "F";
        setUnit("F");
      }
      if (unit === "F") {
        const newT = ((weatherData[i][8] - 32) * 5) / 9;
        weatherData[i][2] = newT.toFixed(1);
        weatherData[i][6] = "C";
        setUnit("C");
      }
    }
  };
  return <Content onClick={convert}>Convert Unity (F°/C°) </Content>;
}

export default Converter;
