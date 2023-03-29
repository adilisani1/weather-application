import { useState, useEffect } from 'react';
import { apiKey } from './weatherAPI/apiKey';
import Header from "./component/Header";
import Weather from "./component/Weather";
import clear from "./image/clear.svg";
import cloud from "./image/cloud.svg";
import overcast from "./image/overcast.svg";
import sunny from './image/sunny.svg';
import moderaterain from './image/moderate-rain.svg';
import heavyrain from './image/heavy-rain.svg';
import lightrain from './image/light-rain.svg';
import smoke from './image/smoke.png';
import snow from './image/snow.svg';
import haze from './image/haze.svg';
import thunderstorm from "./image/thunderstorm.svg"
import drizzle from "./image/drizzle.svg";
import fewClouds from './image/few-clouds.svg';
import brokenClouds from "./image/broken-clouds.svg";
function App() {

  const handleSearch = () => {
    getWeatherData();
  }
  const [location, setLocation] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState("");

  const lat = "24.887296"
  const lng = "67.059712"

  const [forecast, setForecast] = useState([])

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&lat=${lat}&lon=${lng}&appid=${apiKey}&units=${units}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric&units=imperial`
      );


      const data = await response.json();
      const { main, description } = data.weather[0];
      const { humidity, temp, feels_like, pressure, temp_min, temp_max } = data.main;
      const { sunrise, sunset, country } = data.sys;
      const timezone = data.timezone * 1000;
      const city = data.name;
      const date = data.dt;
      const visibility = data.visibility;
      const { speed } = data.wind;
      //5 day forecast
      const forecastData = await forecastResponse.json();
      const { list } = forecastData

      const uniqueDates = new Set();
      const filteredForecast = list.filter((item) => {
        const date = new Date(item.dt_txt).toLocaleDateString();
        if (!uniqueDates.has(date)) {
          uniqueDates.add(date);
          return true;
        }
        return false;
      });

      const weatherInfo = {
        main,
        description,
        humidity,
        temp,
        feels_like,
        pressure,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        timezone,
        date,
        city,
        country,
        visibility,
        speed,
      };
      setWeatherData(weatherInfo);
      setForecast(filteredForecast);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [units]);


  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // const { latitude, longitude } = position.coords;
  //         getWeatherData(lat, lng);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  // }, [units]);

  const calculateTime = (timezone) => {
    const date = new Date(Date.now() + timezone);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateTime(weatherData.timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [weatherData]);

  useEffect(() => {
    switch (weatherData.main) {
      case "Clear": {
        const date = new Date(Date.now() + weatherData.timezone);
        const hours = date.getUTCHours();
        setWeatherState(hours >= 6 && hours <= 18 ? sunny : clear);
        break;
      }
      case "Clouds": {
        if (weatherData.description === "overcast clouds") {
          setWeatherState(overcast);
        }
        else if (weatherData.description === "few clouds") {
          setWeatherState(fewClouds);
        }
        else if (weatherData.description === "broken clouds") {
          setWeatherState(brokenClouds);
        }
        else {
          setWeatherState(cloud);
        }
        break;
      }
      case "Smoke": {
        setWeatherState(smoke);
        break;
      }
      case "Snow": {
        setWeatherState(snow);
        break;
      }
      case "Thunderstorm": {
        setWeatherState(thunderstorm);
        break;
      }
      case "Haze": {
        setWeatherState(haze);
        break;
      }
      case "Drizzle": {
        setWeatherState(drizzle);
        break;
      }
      case "Rain": {
        if (weatherData.description === "light rain") {
          setWeatherState(lightrain);
        } else if (weatherData.description === "moderate rain") {
          setWeatherState(moderaterain);
        } else {
          setWeatherState(heavyrain);
        }
        break;
      }
      default: {
        setWeatherState("");
      }
    }
  }, [weatherData]);


  //Forecast 6 days
  const getWeatherIcon = (main, description) => {

    switch (main) {
      case "Clear": {
        return sunny;
      }
      case "Clouds": {
        if (description === "overcast clouds") {
          return overcast;
        } else if (description === "broken clouds") {
          return brokenClouds;
        }
        else if (description === "few clouds") {
          return fewClouds;
        }
        else {
          return cloud;
        }
      }
      case "Smoke": {
        return smoke;
      }
      case "Snow": {
        return snow;
      }
      case "Rain": {
        if (description === "light rain") {
          return lightrain;
        } else if (description === "moderate rain") {
          return moderaterain;
        } else {
          return heavyrain;
        }
      }
      default: {
        return null;
      }
    }
  };


  return (
    <div className="App">
      <div>
        <p>Latitude: {location.latitude}</p>
        <p>Longitude: {location.longitude}</p>
      </div>
      <Header
        handleSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        getWeatherData={getWeatherData}
        weatherData={weatherData}
        setUnits={setUnits}
        units={units}

      />
      <Weather
        time={time}
        weatherData={weatherData}
        weatherState={weatherState}
        forecast={forecast}
        getWeatherIcon={getWeatherIcon}
      />
    </div>
  );
}

export default App;
