import { apiKey, coordinates } from "./constants";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`,
  )
    .then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(`Error: ${res.status} ${res.statusText}`);
    })
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parsedData = { temp: {} };

  const tempF = Math.round(data.main.temp);
  const tempC = Math.round(((tempF - 32) * 5) / 9);

  parsedData.city = data.name;
  parsedData.temp.F = tempF;
  parsedData.temp.C = tempC;

  parsedData.weatherCondition = data.weather[0].main;
  parsedData.isDay = data.weather[0].icon.includes("d");

  return parsedData;
}
