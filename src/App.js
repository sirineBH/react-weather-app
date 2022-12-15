import React, { useEffect, useState } from "react";

//Components
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Graph from "./components/Graph";
import Spinner from "./components/Spinner";
import Converter from "./components/Converter";

//API
import { fetchWeatherData } from "./services/forecast";

//styles
import { GlobalStyle } from "./styles/GlobalStyle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("Tunis");
  const [unit, setUnit] = useState("C");
  const [graphData, setGraphData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Finds max temperature in the day
  const findMax = (weatherList, start) => {
    var max = 0;
    for (var i = start; i < start + 8; i++) {
      max = Math.max(max, weatherList[i].main.feels_like);
    }

    return max.toFixed(1);
  };

  const getForcastDays = async () => {
    try {
      setLoading(true);

      const res = await fetchWeatherData(searchTerm);

      const days = [];
      const imgURL = "https://openweathermap.org/img/wn/";
      const list = res.list;

      // data item each 3 hours for 24 hours x 5 days => 24 / 3
      var id = 0;
      for (var i = 0; i < list.length; i += 8) {
        var temp = [];
        temp.push(id++);
        temp.push(list[i + 4].dt_txt);
        temp.push(findMax(list, i));
        temp.push(list[i].weather[0].main);
        temp.push(list[i + 3].weather[0].description);
        temp.push(imgURL.concat(list[i].weather[0].icon, "@2x.png"));
        temp.push(unit);
        temp.push(res.city.name);
        temp.push(findMax(list, i));

        days.push(temp);
      }

      setGraphData([...days]);
      setWeatherData([...days]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getForcastDays();
  }, [searchTerm]);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <div className="App">
      <h3>
        Despite climate change, you still can check the weather forecast for
        today.
      </h3>
      <SearchBar
        getForcastDays={getForcastDays}
        setSearchTerm={setSearchTerm}
      />
      <Converter unit={unit} setUnit={setUnit} weatherData={weatherData} />
      <Cards weatherData={weatherData} />

      <Graph graphData={graphData} />
      <GlobalStyle />
    </div>
  );
};
export default App;
