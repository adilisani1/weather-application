import { useState, useEffect } from 'react';
import { apiKey } from './weatherAPI/apiKey';
import Header from "./component/Header";
import Weather from "./component/Weather";
import clear from "./image/clear.svg";
import cloud from "./image/cloud.svg";
function App() {

  const [searchWeather, setSearchWeather] = useState("karachi");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherState, setWeatherState] = useState("");
  const [time, setTime] = useState("");

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&lat=57&lon=-2.15&appid=${apiKey}&units=metric&units=imperial`
      );

      const data = await response.json();
      const { main } = data.weather[0];
      const { humidity, temp, feels_like, pressure, temp_min, temp_max } =
        data.main;
      const { sunrise, sunset, country } = data.sys;
      const timezone = data.timezone * 1000;
      const city = data.name;
      const date = data.dt;

      const weatherInfo = {
        main,
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
    // const seconds = date.getUTCSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateTime(weatherData.timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [weatherData]);

  const { main } = weatherData;


  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clear": setWeatherState(clear)
          break;
        case "Clouds": setWeatherState(cloud)
          break;
        default:
          break;
      }
    }
  }, [main]);

  return (
    <div className="App">

      <Header
        searchWeather={searchWeather}
        setSearchWeather={setSearchWeather}
        getWeatherData={getWeatherData}
        weatherData={weatherData} />

      <Weather
        time={time}
        weatherData={weatherData}
        weatherState={weatherState}
      />
    </div>
  );
}

export default App;
