import React from "react";
import "./Header.scss";

const Header = (props) => {
    return (
        <div className="container">
            <header className="header-wrap">
                <div className="header-inner">
                    <div className="logo-area">
                        <img
                            className="logo-image"
                            src="./images/logo/weather-logo.png"
                            alt="logo-img"
                        />
                        <div className="location-area">
                            <ion-icon name="location-outline"></ion-icon>
                            <span className="">Seattle, Australia</span>
                        </div>
                    </div>

                    <div className="search-box">
                        <ion-icon name="search-outline" class="search-icon"></ion-icon>
                        <input type="text" placeholder="Search city ..." className="search-input" />
                    </div>

                    <div className="weather-temp">
                        <span className="circle"></span>
                        <span>°C</span>
                        <span className="circle"></span>
                        <span>°F</span>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
