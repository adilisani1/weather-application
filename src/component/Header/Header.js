import React, { useEffect, useState } from "react";
import "./Header.scss";
const Header = ({ weatherData, getWeatherData, setUnits, units, handleSearch, searchInput, setSearchInput, themeHandler }) => {

    const [isCelcius, setIsCelcius] = useState(false);

    const handleUnitToggle = () => {
        setUnits(units === "metric" ? "imperial" : "metric");
        setIsCelcius(!isCelcius)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }

    return (
        // <div className="container">
        <header className="header-wrap">
            <div className="location-area">
                <div className="logo-img">
                    <img src="./images/logo/logo-weather.png" alt="weather-logo" />
                </div>
                <ion-icon name="location-sharp"></ion-icon>
                <span className="location-top">{weatherData.city} <span>{weatherData.country}</span></span>
            </div>

            <div className="search-box">
                <ion-icon name="search-outline" class="search-icon" onClick={() => getWeatherData()}></ion-icon>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="search"
                        autoFocus
                        placeholder="Search city..."
                        className="search-input"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </form>
            </div>

            <div className="right-side-values">
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
