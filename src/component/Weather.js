import React, { useState, useEffect } from "react";
import "./Weather.scss";
// import { apiKey } from "../weatherAPI/apiKey";
// import web from "../../public/images/weather-icons/cloud.svg";
const Weather = () => {
    return (
        <section className="weather-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <div className="time-date">
                            <span className="time">09:35</span>
                            <p>Saturday | JUN 29</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="weather-card">
                            <div className="loc">
                                <span className="location-name">Seattle, Australia</span>
                            </div>
                            <div className="weather-card-body">
                                <div className="weather-card-info">
                                    <div className="weather-deg-info">
                                        <span className="deg">35°</span>
                                        <p className="info mb-0">Mostly Clear</p>
                                        <p className="info mb-0">Chances of Rain: 90%</p>
                                        <p className="info mb-0">Humidity 75%</p>
                                    </div>
                                    <div className="head-icon-img">
                                        <img className="icon-img" src="/images/weather-icons/heavy-rain.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5 text-center align-items-center d-flex justify-content-center">
                    <div className="col-md-2  img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/sunny.svg"
                                    alt="Card image cap" />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/overcast.svg"
                                    alt="Card image cap" />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/windy.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/mist.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/cloud.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-card">
                        <div className="card-shadow">
                            <div className="card-body">
                                <h5 class="card-title">28 MON</h5>
                            </div>
                            <div className="icon-img">
                                <img
                                    className="icons"
                                    src="/images/weather-icons/clear.svg"
                                    alt="Card image cap"
                                />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title ">18/23</h5>
                                <p class="card-text">Mostly Clear</p>
                                <p class="card-text">Rain 18%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 text-center align-items-center d-flex justify-content-center">
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/sunny.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">UV Index</h5>
                            {/* <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/windy.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">28 MON</h5>
                            <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/partly-cloudy.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">28 MON</h5>
                            <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 text-center align-items-center d-flex justify-content-center">
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/sunny.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">28 MON</h5>
                            <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/windy.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">28 MON</h5>
                            <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3  img-card">
                    <div className="card-shadow">
                        {/* <div className="icon-img">
                            <img
                                className="icons"
                                src="/images/weather-icons/partly-cloudy.svg"
                                alt="Card image cap" />
                        </div> */}
                        <div class="weather-highlights">
                            <h5 class="card-title">28 MON</h5>
                            <h5 class="card-title ">18/23</h5>
                            <p class="card-text">Mostly Clear</p>
                            <p class="card-text">Rain 18%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Weather;
