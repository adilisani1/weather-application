import React, { useState, useEffect } from "react";
import "./Weather.scss";

import sunRise from '../../image/sunny.svg';
import sunSet from '../../image/clear.svg';
import windyIcon from '../../image/wind.png';
import dropsIcon from '../../image/dropp.png';
import pressureIcon from '../../image/thermometer.png';
import visibilityIcon from '../../image/visibility.png';
import cloudComputing from "../../image/cloud-computing.png"


const Weather = (props) => {

    const { forecast, weatherData, time, weatherState, getWeatherIcon } = props;

    const [formattedDate, setFormattedDate] = useState('');
    const [weekday, setWeekday] = useState('');

    const temp = weatherData?.temp;
    const feelsLike = weatherData?.feels_like;
    const parsedTemp = typeof temp === 'number' ? parseInt(temp.toFixed()) : '20';
    const parsedFeelTemp = typeof feelsLike === 'number' ? parseInt(feelsLike.toFixed()) : '18';

    // <h1>{new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</h1>
    const sunRi = new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    const sunR = sunRi === "Invalid Date" ? "--" : sunRi;
    const sunSe = new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    const sunS = sunSe === "Invalid Date" ? "--" : sunSe;

    useEffect(() => {
        const timer = setTimeout(() => {
            const date = new Date();
            const dayMonth = { month: 'short', day: 'numeric' };
            setFormattedDate(date.toLocaleDateString('en-US', dayMonth));
            setWeekday(date.toLocaleDateString('en-US', { weekday: 'long' }));
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const getSpeedStatus = (speed) => {
        if (speed < 10) {
            return "Calm";
        } else if (speed < 20) {
            return "Light breeze";
        } else if (speed < 30) {
            return "Moderate breeze";
        } else if (speed < 40) {
            return "Strong breeze";
        } else {
            return "Very strong wind";
        }
    };

    const getAtmosphereStatus = (pressure) => {
        if (pressure < 1000) {
            return "Low Pressure";
        } else if (pressure >= 1000 && pressure <= 1010) {
            return "Normal Pressure";
        } else if (pressure > 1010) {
            return "High Pressure";
        } else {
            return "Unknown";
        }
    };

    return (
        <>
            {/* Section-top */}
            <section className="weather-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="time-date">
                                <span className="time">{time}</span>
                                <p> {weekday} | {formattedDate} </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12 mt-sm-5">
                            <div className="weather-location-top">
                                <div className="loc">
                                    <div>
                                        <ion-icon name="location-sharp"></ion-icon>
                                    </div>
                                    <span className="location-name">
                                        {weatherData.city} <span>{weatherData.country}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-card-body">
                                    <div className="weather-deg-info">
                                        <span className="deg">{parsedTemp}°</span>
                                        <p className="weather-main-status mb-0">{weatherData.main}</p>
                                        <p className="info mb-0">{weatherData.description}</p>
                                        <p className="real-feel mb-0">RealFeel®: <span className="value">{parsedFeelTemp}°</span> </p>
                                    </div>
                                    <div className="head-icon-img">
                                        <img
                                            className="icon-img"
                                            src={weatherState}
                                            alt="icon-img"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Forecast Section */}
            <div className="container">
                <div className="row mt-5 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-6 row-cols-xxl-6 text-center align-items-center d-flex justify-content-center">

                    {forecast?.slice(0, 6).map((item, index) => {

                        const date = new Date(item.dt_txt);
                        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
                        const day = date.getDate();
                        const { main, description } = item.weather[0]


                        const weatherIcon = getWeatherIcon(main, description);



                        return (
                            <div className=" img-card" key={index}>
                                <div className="forecast-card ">
                                    <div className="card-body">
                                        <h5 className="day">{`${day} ${weekday}`} </h5>
                                    </div>
                                    <div className="icon-img">
                                        <img
                                            className="icons"
                                            src={weatherIcon}
                                            alt="weather-icon"
                                        />
                                    </div>
                                    <div className="card-body">

                                        <h5 className="deg-feel">{`${parseInt(item.main.temp?.toFixed(2))}`}°</h5>
                                        <p className="stats"> {`${item.weather[0].description}`}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })}

                </div>
            </div>

            {/* WEATHER-INFO */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
                    <div className=" img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Clouds</h5>

                                <div className="status-flex">
                                    <h3 className="wind-speed">{weatherData.all}%</h3>
                                    <img src={cloudComputing} alt="" />
                                </div>
                                <span className="speed-text">
                                    {weatherData.all > "90" ?
                                        "Overcast" :
                                        weatherData.all < "1"
                                            ? "No Clouds"
                                            : ""}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Wind Status</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">
                                        {parseFloat(weatherData.speed * 3.6).toFixed(1)}{" "}
                                        <span className="km">km/h</span>
                                    </h1>
                                    <img src={windyIcon} alt="wind icon" />
                                </div>
                                <span className="speed-text">{getSpeedStatus(parseFloat(weatherData.speed * 3.6).toFixed(1))}</span>
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Sunrise & Sunset</h5>

                                <div className="rowClass">
                                    <div className="">
                                        {/* <h1>{new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</h1> */}
                                        <h1>{sunR}</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                    <div className="day-night-icons">
                                        <img
                                            className="rise-set"
                                            src={sunRise}
                                            alt="sunny icon"
                                        />
                                    </div>
                                </div>
                                <div className="rowClass">
                                    <div className="">
                                        {/* <h1>{new Date(weatherData.sunset * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</h1> */}
                                        <h1>{sunS}</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                    <div className="day-night-icons">
                                        <img
                                            className="rise-set"
                                            src={sunSet}
                                            alt="clear icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Humidity</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">{weatherData.humidity}%</h1>
                                    <img src={dropsIcon} alt="drops icon" />
                                </div>

                                <span className="speed-text">
                                    {weatherData.humidity > 45 ? "Comfortable"
                                        : weatherData.humidity < 30 ? "Dry"
                                            : weatherData.humidity > 30 && weatherData.humidity < 45
                                                ? "Normal"
                                                : "Below"}
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Visibility</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">
                                        {(weatherData.visibility / 1000).toFixed(1)}
                                    </h1>
                                    <img src={visibilityIcon} alt="visibility icon" />
                                </div>
                                <span className="speed-text">
                                    {weatherData.visibility === "high"
                                        ? "High Visibility"
                                        : weatherData.visibility === "low"
                                            ? "Low Visibility"
                                            : "Average Visibility"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Pressure</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">{weatherData.pressure}</h1>
                                    <img src={pressureIcon} alt="pressure icon" />
                                </div>
                                <span className="speed-text">{getAtmosphereStatus(weatherData.pressure)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
export default Weather;
