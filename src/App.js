import { useState, useEffect, useCallback } from 'react';
import { apiKey } from './weatherAPI/apiKey';
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clear from "./image/clear.svg";
import cloud from "./image/cloud.svg";
import overcast from "./image/overcast.svg";
import sunny from './image/sunny.svg';
import moderaterain from './image/moderate-rain.svg';
import heavyrain from './image/heavy-rain.svg';
import lightrain from './image/light-rain.svg';
import smoke from './image/smoke.png';
import snow from './image/snow.svg';
// import haze from './image/haze.png';
// import thunderstorm from "./image/thunderstorm.png"
// import drizzle from "./image/drizzle.svg";
import fewClouds from './image/few-clouds.svg';
import fewNightClouds from './image/few-night-clouds.svg';
import brokenClouds from "./image/broken-clouds.svg";
import brokenNightClouds from './image/broken-night-clouds.svg';
import scatteredClouds from "./image/scattered-clouds.svg";
// import Loading from './components/Loading/Loading';
import './App.scss';
import { WeatherIcons } from './components/WeatherIcons';
import { Location } from './components/Location';


function App() {

  const options = { hour: 'numeric', minute: 'numeric' };


  const [searchInput, setSearchInput] = useState("");
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString([], options));

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [forecast, setForecast] = useState([])

  const infoWeather = () => toast.info("Fetching weather data ", {
    toastId: 'info1',
    // position: "top-right",
    autoClose: 2000,
    pauseOnHover: false,

  });


  const notify = () => toast.success("Successfully getting weather information", {
    toastId: "notify1",
    // position: "top-right",
    autoClose: 2000,
    pauseOnHover: false
  });

  const errInfo = () => toast.error("Error! please type the correct city name.", {
    toastId: 'error1',
    // position: "top-right",
    autoClose: 3000,
    pauseOnHover: false,

  });


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

  const getWeatherData = useCallback(async () => {
    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`
      );

      const data = await response.json();

      //error
      const err = data.message

      //Weather Info
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
        all,
        err
      };
      setWeatherData(weatherInfo);
      setForecast(filteredForecast);
      notify()

    } catch (e) {
      errInfo();
    }
  }, [longitude, latitude, units, searchInput]);


  useEffect(() => {
    if (weatherData && weatherData.err) {
      errInfo();
    } else if (weatherData && !weatherData.err) {
      infoWeather();
    } else {

      getWeatherData();

      // getWeatherData();
    }
  }, [longitude, latitude, units, searchInput, weatherData, weatherData.err, getWeatherData]);

  const calculateTime = (timezone) => {
    const date = new Date(Date.now() + timezone);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (weatherData && typeof weatherData.timezone === 'number') {
      const intervalId = setInterval(() => {
        setTime(calculateTime(weatherData.timezone));
      }, 0);
      return () => clearInterval(intervalId);
    }
  }, [weatherData]);


  //~Forecast Icons
  const getWeatherIcon = (main, description) => {

    const date = new Date(Date.now() + weatherData.timezone);
    const hours = date.getUTCHours();

    switch (main) {
      case "Clear": {

        return hours >= 6 && hours <= 18 ? sunny : clear;
      }

      case "Clouds": {

        if (description === "overcast clouds") {
          return overcast;
        } else if (description === "broken clouds") {
          return hours >= 6 && hours <= 18 ? brokenClouds : brokenNightClouds;
        } else if (description === "scattered clouds") {
          return scatteredClouds;
        }
        else if (description === "few clouds") {
          return hours >= 6 && hours <= 18 ? fewClouds : fewNightClouds;

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
        return heavyrain;
      }
    }
  };


  return (
    <>
      <div className="wrapper dark" >

        <Header
          themeHandler={themeHandler}
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

        <WeatherIcons
          weatherData={weatherData}
          setWeatherState={setWeatherState} />

        <Location
          searchInput={searchInput}
          units={units}
          getWeatherData={getWeatherData}
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />

        <ToastContainer />

      </div>

    </>
  );
}

export default App;
