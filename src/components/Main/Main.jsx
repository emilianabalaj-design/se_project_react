import "./Main.css";
import { uneContext, useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ clothingItem, handleOpenItemModal, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData || !weatherData.temp) {
    return null;
  }

  const tempF = weatherData.temp.F;
  const weatherType = tempF >= 86 ? "hot" : tempF >= 66 ? "warm" : "cold";

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData?.temp?.[currentTempUnit]}° {currentTempUnit} / You
        may want to wear:
      </p>
      <ul className="main__card-list">
        {clothingItem
          .filter((item) => item.weather === weatherType)
          .map((item) => (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
            />
          ))}
      </ul>
    </main>
  );
}

export default Main;
