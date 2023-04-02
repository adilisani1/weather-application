import React, { useState } from "react";
import "./Weather.scss";

import windyIcon from '../../image/wind.png';
import dropsIcon from '../../image/dropp.png';
import pressureIcon from '../../image/thermometer.png';
import visibilityIcon from '../../image/visibility.png';
import cloudComputing from "../../image/cloud-computing.png"

const Weather = ({ weatherData, time, weatherState, forecast, getWeatherIcon }) => {

    const date = new Date();
    const dayMonth = { month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', dayMonth);
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })

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
                                    <span className="location-name">
                                        {weatherData.city} ,<span> {weatherData.country}</span>
                                    </span>
                                </div>
                            </div>

                            <div className="weather-card">
                                <div className="weather-card-body">
                                    <div className="weather-deg-info">
                                        <span className="deg">{parseInt(weatherData.temp?.toFixed(2))}°</span>
                                        <p className="weather-main-status mb-0">{weatherData.main}</p>
                                        <p className="info mb-0">{weatherData.description}</p>
                                        <p className="real-feel mb-0">RealFeel: <span className="value">{parseInt(weatherData?.feels_like?.toFixed(2))}°</span> </p>
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
                <div className="row mt-5 text-center align-items-center d-flex justify-content-center">

                    {forecast?.slice(0, 6).map((item) => {

                        const date = new Date(item.dt_txt);
                        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' })
                        const day = date.getDate();
                        const { main, description } = item.weather[0]

                        const weatherIcon = getWeatherIcon(main, description)

                        return (
                            <div className="col-md-2 col-sm-4   img-card">
                                <div className="forecast-card ">
                                    <div className="card-body">
                                        <h5 className="day">{`${day} ${weekday}`} </h5>
                                    </div>
                                    <div className="icon-img">
                                        <img
                                            className="icons"
                                            src={weatherIcon}
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <div className="card-body">
                                        {/* <h5 className="deg-feel">{parseInt(item.main.temp_min?.toFixed(2))}° / {parseInt(item.main.temp_max?.toFixed(2))}°</h5>
                                         */}
                                        <h5 className="deg-feel">{`${parseInt(item.main.temp?.toFixed(2))}`}°</h5>
                                        <p className="stats"> {`${item.weather[0].description}`}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>

            {/* WEATHER-INFOR */}
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Clouds</h5>

                                <div className="status-flex">
                                    <h3 className="wind-speed">{weatherData.all}%</h3>
                                    <img src={cloudComputing} alt="" />
                                </div>
                                <span className="speed-text">All</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Wind Status</h5>
                                <div className="status-flex">

                                    <h1 className="wind-speed">
                                        {/* 7.70 */}{weatherData.speed}
                                        <span className="km"> km/h</span>
                                    </h1>
                                    <img src={windyIcon} alt="" />
                                </div>
                                <span className="speed-text">Speed</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Sunrise & Sunset</h5>

                                <div className="rowClass">
                                    <div className="">
                                        <h1>{new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                    <div className="day-night-icons">
                                        <img
                                            className="rise-set"
                                            src="/images/weather-icons/sunny.svg"
                                            alt="Card image cap"
                                        />
                                    </div>
                                </div>
                                <div className="rowClass">
                                    <div className="">
                                        <h1>{new Date(weatherData.sunset * 1000).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</h1>
                                        <p>-1m 46s</p>
                                    </div>
                                    <div className="day-night-icons">
                                        <img
                                            className="rise-set"
                                            src="/images/weather-icons/clear.svg"
                                            alt="Card image cap"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Humidity</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">{weatherData.humidity}%</h1>
                                    <img src={dropsIcon} alt="" />
                                </div>

                                <span className="speed-text">Normal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Visibility</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">
                                        {weatherData.visibility}
                                        {/* <span className="km">km/h</span> */}
                                    </h1>
                                    <img src={visibilityIcon} alt="" />
                                </div>
                                <span className="speed-text">Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Pressure</h5>
                                <div className="status-flex">
                                    <h1 className="wind-speed">{weatherData.pressure}</h1>
                                    <img src={pressureIcon} alt="" />
                                </div>
                                <span className="speed-text">Atmosphere</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Weather;
