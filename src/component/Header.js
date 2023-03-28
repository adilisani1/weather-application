import React, { useEffect, useState } from "react";
import "./Header.scss";
const Header = ({ weatherData, searchWeather, getWeatherData, setSearchWeather }) => {

    const [toggleTheme, setToggleTheme] = useState("dark");
    const [units, setUnits] = useState("metric");
    const [isCelcius, setIsCelcius] = useState(true);
    const toCelsius = (temp) => {
        return (temp - 32) * 5 / 9;
    };

    const toFahrenheit = (temp) => {
        return (temp * 9 / 5) + 32;
    };

    function handleUnitClick() {
        setIsCelcius(!isCelcius);
    }

    const themeHandler = () => {
        if (toggleTheme === "dark") {
            setToggleTheme('light')
        } else {
            setToggleTheme('dark')
        }
    }


    useEffect(() => {
        document.body.className = toggleTheme;
    }, [toggleTheme])

    return (
        <div className="container">
            <header className="header-wrap">
                <div className="header-inner">
                    <div className="logo-area">
                        <img
                            className="logo-image"
                            src="./images/logo/logo-weather.png"
                            alt="logo-img"
                        />
                        <div className="location-area">
                            <ion-icon name="location-sharp"></ion-icon>
                            <span className="location-top">{weatherData.city} <span>{weatherData.country}</span></span>
                        </div>
                    </div>

                    <div className="search-box">
                        <ion-icon name="search-outline" class="search-icon" onClick={() => getWeatherData()}></ion-icon>
                        <input
                            type="text"
                            id="search"
                            autoFocus
                            placeholder="Search city ..."
                            className="search-input"
                            value={searchWeather}
                            onChange={(e) => setSearchWeather(e.target.value)}
                        />
                    </div>

                    <div className="d-flex align-items-center justify-flex-end">
                        <div className="weather-temp">
                            <span className="deg">
                                {isCelcius ? parseInt(weatherData.temp) : parseInt(toFahrenheit(weatherData.temp))}°
                            </span>
                            <span className={`circle ${isCelcius ? 'active' : ''}`} onClick={handleUnitClick}>
                                °F
                            </span>
                            <span className={`circle ${!isCelcius ? 'active' : ''}`} onClick={handleUnitClick}>
                                °C
                            </span>

                        </div>

                        <div className="form-check ">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkbox"
                                onChange={themeHandler} />
                            <label className="form-check-label" htmlFor="checkbox">
                                <ion-icon name="sunny-outline" class="sun"></ion-icon>
                                <ion-icon name="moon-outline" class="moon"></ion-icon>
                            </label>
                        </div>
                    </div>

                </div>
            </header >
        </div >
    );
};

export default Header;
