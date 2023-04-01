import { useState, useEffect, useRef } from 'react';
import { apiKey } from './weatherAPI/apiKey';
import Header from "./component/Header/Header";
import Weather from "./component/Weather/Weather";
import clear from "./image/clear.svg";
import cloud from "./image/cloud.svg";
import overcast from "./image/overcast.svg";
import sunny from './image/sunny.svg';
import moderaterain from './image/moderate-rain.svg';
import heavyrain from './image/heavy-rain.svg';
import lightrain from './image/light-rain.svg';
import smoke from './image/smoke.png';
import snow from './image/snow.svg';
import haze from './image/haze.png';
import thunderstorm from "./image/thunderstorm.svg"
import drizzle from "./image/drizzle.svg";
import fewClouds from './image/few-clouds.svg';
import brokenClouds from "./image/broken-clouds.svg";
import scatteredClouds from "./image/scattered-clouds.svg";
import Loading from './component/Loading/Loading';
import './App.scss';



function App() {


  const [searchInput, setSearchInput] = useState("");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasLocationAccess, setHasLocationAccess] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [forecast, setForecast] = useState([])

  const themeHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      if (isDarkTheme) {
        wrapper.classList.remove('light');
        wrapper.classList.add('dark');
      } else {
        wrapper.classList.remove('dark');
        wrapper.classList.add('light');
      }
    }
  }, [isDarkTheme]);


  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
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
      const { all } = data.clouds

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
        all
      };
      setWeatherData(weatherInfo);
      setForecast(filteredForecast);
      setIsLoading(false);
      setSearchInput("")
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setHasLocationAccess(true);
    };
    const errorCallback = () => {
      setLatitude(37.7749);
      setLongitude(-122.4194);
      setHasLocationAccess(true);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  }, []);

  useEffect(() => {
    let timeoutId;
    if (latitude && longitude) {
      timeoutId = setTimeout(() => {
        getWeatherData();

      }, 1000);
    }
    return () => clearTimeout(timeoutId);

  }, [units, latitude, longitude]);

  const handleSearch = () => {
    getWeatherData();
  }
  const calculateTime = (timezone) => {
    const date = new Date(Date.now() + timezone);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateTime(weatherData.timezone));
    }, 3000);

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
        else if (weatherData.description === "scattered clouds") {
          setWeatherState(scatteredClouds);
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
        } else if (description === "scattered clouds") {
          return scatteredClouds;
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

  if (!hasLocationAccess) {
    return <div><Loading /></div>;
  }

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <div className="wrapper dark" >


      <Header
        themeHandler={themeHandler}
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
