const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};
const commentOnWeather = (temp) => console.log("It’s" + determineWeather(temp));

commentOnWeather(44);
