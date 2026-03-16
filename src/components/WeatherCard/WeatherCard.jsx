import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { weatherConditionImages } from "../../utils/constants";

import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  const timeOfDay = weatherData?.isDay ? "day" : "night";
  const condition = weatherData?.weatherCondition?.toLowerCase() || "default";

  const weatherImage =
    weatherConditionImages[timeOfDay]?.[condition]?.image ||
    weatherConditionImages[timeOfDay]?.default?.image;

  const altText = `${condition} - ${timeOfDay}`;
  const temperature = weatherData?.temp?.[currentTempUnit];

  return (
    <section className="weather-card">
      <img src={weatherImage} alt={altText} className="weather-card__image" />
      <p className="weather-card__temp">
        {temperature ?? "N/A"}°{currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
