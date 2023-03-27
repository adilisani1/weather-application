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
// import haze from './image/haze.svg';

function App() {

  const [searchWeather, setSearchWeather] = useState("karachi");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState("");





  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&lat=57&lon=-2.15&appid=${apiKey}&units=metric&units=imperial&forecast?`
      );

      const data = await response.json();
      const { main, description } = data.weather[0];
      const { humidity, temp, feels_like, pressure, temp_min, temp_max } =
        data.main;
      const { sunrise, sunset, country } = data.sys;
      const timezone = data.timezone * 1000;
      const city = data.name;
      const date = data.dt;

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
      };
      setWeatherData(weatherInfo);
      setSearchWeather("");
    } catch (e) {
      console.log(e);
    }

  };

  useEffect(() => {
    getWeatherData();
  }, []);

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
        } else {
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

      // case "Haze": {
      //   setWeatherState(haze);
      //   break;
      // }

      default: {
        setWeatherState("");
      }
    }
  }, [weatherData]);


  return (
    <div className="App">
      <Header
        searchWeather={searchWeather}
        setSearchWeather={setSearchWeather}
        getWeatherData={getWeatherData}
        weatherData={weatherData}
      />
      <Weather
        time={time}
        weatherData={weatherData}
        weatherState={weatherState}
      />
    </div>
  );
}

export default App;
