import React, { useState } from "react";
import "./Weather.scss";

const Weather = ({ weatherData, time, weatherState }) => {

    return (
        <>
            <section className="weather-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6">
                            <div className="time-date">
                                <span className="time">{time}</span>
                                <p>Sunday | {new Date().toLocaleDateString()}</p>
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
                                            <p className="info mb-0">{weatherData.main}, {weatherData.description}</p>
                                            <p className="info mb-0"></p>
                                            <p className="info mb-0">
                                                Humidity: {weatherData.humidity}%
                                            </p>
                                        </div>
                                        <div className="head-icon-img">
                                            <img
                                                className="icon-img"
                                                src={weatherState}
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

                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">27 MON</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">28 TUE</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">

                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">27 MON</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">29 WED</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">30 THU</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="forecast-card ">
                            <div className="card-body">
                                <h5 className="day">31 FRI</h5>
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
                                {/* <p className="rain-chance">Rain 18%</p> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* LARGE CARDS */}
            <div className="container">
                <div className="row mt-3 text-center align-items-center d-flex justify-content-center">
                    <div className="col-md-4 img-card">
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">UV Index</h5>
                                <h3 className="wind-speed">Low</h3>
                                <span className="speed-text">Current UV</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 img-card">
                        <div className="card-collection">
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
                        <div className="card-collection">
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
                        <div className="card-collection">
                            <div className="weather-highlights">
                                <h5 className="weather-condition-title">Humidity</h5>
                                <h1 className="wind-speed">12%</h1>
                                <span className="speed-text">Normal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 img-card">
                        <div className="card-collection">
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
                        <div className="card-collection">
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
