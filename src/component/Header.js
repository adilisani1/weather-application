import React, { useEffect, useState } from "react";

import "./Header.scss";

const Header = (props) => {

    const [toggleTheme, setToggleTheme] = useState("dark");
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
                            <span className="location-top">Seattle, <span>Australia</span></span>
                        </div>
                    </div>

                    <div className="search-box">
                        <ion-icon name="search-outline" class="search-icon" onClick={() => props.getWeather()}></ion-icon>
                        <input
                            type="search"
                            id="search"
                            autoFocus
                            placeholder="Search city ..."
                            className="search-input"
                            value={props.searchWeather}
                            onChange={(e) => props.setSearchWeather(e.target.value)}
                        />
                    </div>

                    <div className="d-flex align-items-center justify-flex-end">
                        <div className="weather-temp">
                            <span className="circle active">
                                °C
                            </span>
                            <span className="circle">
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

export default Header;
