import React, { useState, useEffect } from "react";
import "./Weather.scss";
import { apiKey } from "../weatherAPI/apiKey";

const Weather = ({ searchWeather }) => {

    const [weatherData, setWeatherData] = useState([]);

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
        const seconds = date.getUTCSeconds().toString().padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    };

    const { timezone } = weatherData;
    const time = calculateTime(timezone);

    return (
        <>
            <section className="weather-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="time-date">
                                <span className="time">{time}</span>
                                <p>Saturday | {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="weather-card">
                                <div className="loc">
                                    <span className="location-name">
                                        {weatherData.city} ,<span> {weatherData.country} </span>
                                    </span>
                                </div>
                                <div className="weather-card-body">
                                    <div className="weather-card-info">
                                        <div className="weather-deg-info">
                                            <span className="deg">{parseInt(weatherData.temp?.toFixed(2))}°</span>
                                            <p className="info mb-0">{weatherData.main}</p>
                                            <p className="info mb-0">Chances of Rain: 90%</p>
                                            <p className="info mb-0">
                                                Humidity: {weatherData.humidity}%
                                            </p>
                                        </div>
                                        <div className="head-icon-img">
                                            <img
                                                className="icon-img"
                                                src="/images/weather-icons/heavy-rain.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row mt-5 text-center align-items-center d-flex justify-content-center">
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">27 SUN</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/sunny.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/overcast.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/windy.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/mist2.png"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/cloud.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 className="day">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/clear.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="deg-feel">18° / 23°</h5>
                                <p className="stats">Mostly Clear</p>
                                <p className="rain-chance">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LARGE CARDS */}
            <div className="container">
                <div className="row mt-3 text-center align-items-center d-flex justify-content-center cont">
                    <div className="col-md-4 img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">UV Index</h5>
                                <h3 className="wind-speed">Low</h3>
                                <span className="speed-text">Current UV</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Wind Status</h5>
                                <h1 className="wind-speed">
                                    7.70
                                    <span className="km"> km/h</span>
                                </h1>
                                <span className="speed-text">Speed</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Sunrise & Sunset</h5>
                                <div className="row align-items-center mt-2">
                                    <div className="col-md-3">
                                        <img
                                            className="icons "
                                            src="/images/weather-icons/sunny.svg"
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <h1>6:35</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-2">
                                    <div className="col-md-3">
                                        <img
                                            className="icons "
                                            src="/images/weather-icons/clear.svg"
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <h1>6:35</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3 text-center align-items-center d-flex justify-content-center">
                    <div className="col-md-4 img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Humidity</h5>
                                <h1 className="wind-speed">12%</h1>
                                <span className="speed-text">Normal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Visibility</h5>
                                <h1 className="wind-speed">
                                    5.2 <span className="km">km/h</span>
                                </h1>
                                <span className="speed-text">Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 img-card">
                        <div className="card-shadow">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Air Quality</h5>
                                <h1 className="wind-speed">105</h1>
                                <span className="speed-text">Unhealthy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Weather;
