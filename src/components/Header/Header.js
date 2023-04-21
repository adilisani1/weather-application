import React, { useState } from "react";
import "./Header.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ weatherData, setUnits, units, setSearchInput, themeHandler }) => {

    const [inputVal, setInputVal] = useState("");


    const handleUnitToggle = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    const handleWeatherDataFetch = (e) => {
        e.preventDefault();

        if (inputVal === "") return
        if (inputVal !== "") setSearchInput(inputVal);
        setInputVal("")


    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleWeatherDataFetch(e);
        } else {
            return e.keyCode === 0
        }
    };

    return (
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
                <input
                    type="text"
                    id="search"
                    autoFocus
                    placeholder="Search city....."
                    className="search-input"
                    value={inputVal}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setInputVal(e.target.value)}
                />
            </div>

            <div className="right-side-values fl">

                <div className="weather-temp">
                    <button className={`circle ${units === "metric" ? 'active' : ''}`} name="metric" onClick={handleUnitToggle}>°C</button>
                    <button className={`circle ${units === "imperial" ? 'active' : ''}`} name="imperial" onClick={handleUnitToggle}>°F</button>
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
