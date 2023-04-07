import React, { useEffect, useState } from "react";
import "./Header.scss";
const Header = ({ weatherData, getWeatherData, setUnits, units, searchInput, setSearchInput, themeHandler }) => {

    const [isCelcius, setIsCelcius] = useState(false);

    const handleUnitToggle = () => {
        setUnits(units === "metric" ? "imperial" : "metric");
        setIsCelcius(!isCelcius)
    };

    const handleWeatherDataFetch = async (e) => {
        e.preventDefault();
        await getWeatherData();

    };
    return (
        // <div className="container">
        <header className="header-wrap">
            <div className="location-area fl">
                <div className="logo-img">
                    <img src="./images/logo/logo-weather.png" alt="weather-logo" />
                </div>
                <div className="location-header">
                    <ion-icon name="location-sharp"></ion-icon>
                    <span className="location-top">{weatherData.city} <span>{weatherData.country}</span></span>
                </div>
            </div>

            <div className="search-box fl">
                <ion-icon name="search-outline" class="search-icon" onClick={handleWeatherDataFetch}></ion-icon>
                <form onSubmit={handleWeatherDataFetch}>
                    <input
                        type="text"
                        id="search"
                        autoFocus
                        placeholder="Berlin DE"
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </form>
            </div>

            <div className="right-side-values fl">
                <div className="weather-temp">
                    <span className={`circle ${isCelcius ? 'active' : ''}`} onClick={handleUnitToggle}>
                        °C
                    </span>
                    <span className={`circle ${!isCelcius ? 'active' : ''}`} onClick={handleUnitToggle}>
                        °F
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


        </header >
        // </div >
    );
};


export default Header;
