import cloudy from "../assets/cloudy.svg";
import cloudIcon from "../assets/cloud-icon.svg";
import sunIcon from "../assets/sun-icon.svg";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy" className="weather-card_image" />
      <img className="weather-card__cloud" src={cloudIcon} alt="Cloud icon" />
      <img className="weather-card__sun" src={sunIcon} alt="Sun icon" />

      <p className="weather-card__temp">75&deg; F</p>
    </section>
  );
}

export default WeatherCard;
