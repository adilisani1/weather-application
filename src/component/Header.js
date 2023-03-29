import React, { useEffect, useState } from "react";
import "./Header.scss";
const Header = ({ weatherData, getWeatherData, setUnits, units, handleSearch, searchInput, setSearchInput }) => {

    const [toggleTheme, setToggleTheme] = useState("dark");
    const [isCelcius, setIsCelcius] = useState(true);

    const themeHandler = () => {
        if (toggleTheme === "dark") {
            setToggleTheme('light')
        } else {
            setToggleTheme('dark')
        }
    }

    const handleUnitToggle = () => {
        setUnits(units === "metric" ? "imperial" : "metric");
        setIsCelcius(!isCelcius)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();

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

                    <div className="d-flex align-items-center justify-flex-end">
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

                </div>
            </header >
        </div >
    );
};

// const toggleUnit = () => {
//     setUnit(unit === "metric" ? "imperial" : "metric");
// };

// return (
//     <div className="App">
//         <h1>
//             <span>{celsiusTemp}°C</span>
//             <span>{fahrenheitTemp}°F</span>
//         </h1>
//         <button onClick={toggleUnit}>Toggle Unit</button>
//     </div>
// );

export default Header;
