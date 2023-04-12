import React, { useState } from "react";
import "./Header.scss";
const Header = ({ weatherData, getWeatherData, setUnits, units, searchInput, setSearchInput, themeHandler }) => {

    const [isCelcius, setIsCelcius] = useState(false);
    const [inputVal, setInputVal] = useState("");

    // const handleUnitToggle = (e) => {
    //     const selectedUnit = e.currentTarget.name
    //     if (units !== selectedUnit) setUnits(selectedUnit)
    //     setIsCelcius(!isCelcius)
    // }

    const handleUnitToggle = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
        // Remove the following line to prevent toggling isCelcius
        // setIsCelcius(!isCelcius)
    }

    const handleWeatherDataFetch = (e) => {
        e.preventDefault();
        if (inputVal !== "") setSearchInput(inputVal);
        setInputVal("")
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
                <input
                    type="text"
                    id="search"
                    autoFocus
                    placeholder="Berlin DE"
                    className="search-input"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                />
            </div>

            <div className="right-side-values fl">
                {/* <div className={`weather-temp ${isCelcius ? 'active' : ''}`}>

                    <button className="circle" name="metric" onClick={handleUnitToggle}>°C</button>
                    <button className="circle" name="imperial" onClick={handleUnitToggle}>°F</button>

                </div> */}

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
