const coordinates = { lat: "41.020993", lon: "-74.009655" };
const apiKey = "c000826666f6a794cffd843cb5367155";

const weatherConditionImages = {
  day: {
    clear: {
      name: "clear",
      image: new URL("../assets/day/clear.svg", import.meta.url).href,
    },
    clouds: {
      name: "cloudy",
      image: new URL("../assets/day/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "fog",
      image: new URL("../assets/day/foggy.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/day/rainy.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/day/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/day/storm.svg", import.meta.url).href,
    },

    default: {
      name: "default",
      image: new URL("../assets/day/clear.svg", import.meta.url).href,
    },
  },
  night: {
    clear: {
      name: "clear",
      image: new URL("../assets/night/clear.svg", import.meta.url).href,
    },
    clouds: {
      name: "cloudy",
      image: new URL("../assets/night/cloudy.svg", import.meta.url).href,
    },
    fog: {
      name: "foggy",
      image: new URL("../assets/night/foggy.svg", import.meta.url).href,
    },
    rain: {
      name: "rain",
      image: new URL("../assets/night/rainy.svg", import.meta.url).href,
    },
    snow: {
      name: "snow",
      image: new URL("../assets/night/snow.svg", import.meta.url).href,
    },
    storm: {
      name: "storm",
      image: new URL("../assets/night/storm.svg", import.meta.url).href,
    },

    default: {
      name: "default",
      image: new URL("../assets/night/clear.svg", import.meta.url).href,
    },
  },
};
export { coordinates, apiKey, weatherConditionImages };
