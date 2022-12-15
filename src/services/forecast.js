import Http from ".";

const fetchWeatherData = async (searchTerm) => {
  const res = await Http.get("", {
    params: {
      q: searchTerm,
    },
  });

  return res.data;
};

export { fetchWeatherData };
