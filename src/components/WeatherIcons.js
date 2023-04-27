import { useEffect } from 'react';

import clear from "../image/clear.svg";
import cloud from "../image/cloud.svg";
import overcast from "../image/overcast.svg";
import sunny from '../image/sunny.svg';
import moderaterain from '../image/moderate-rain.svg';
import heavyrain from '../image/heavy-rain.svg';
import lightrain from '../image/light-rain.svg';
import smoke from '../image/smoke.png';
import snow from '../image/snow.svg';
import haze from '../image/haze.png';
import thunderstorm from "../image/thunderstorm.png"
import drizzle from "../image/drizzle.svg";
import fewClouds from '../image/few-clouds.svg';
import fewNightClouds from '../image/few-night-clouds.svg';
import brokenClouds from "../image/broken-clouds.svg";
import brokenNightClouds from '../image/broken-night-clouds.svg';
import scatteredClouds from "../image/scattered-clouds.svg";

export const WeatherIcons = ({ weatherData, setWeatherState }) => {

    //~Weather Icons
    useEffect(() => {

        const date = new Date(Date.now() + weatherData.timezone);
        const hours = date.getUTCHours();

        switch (weatherData.main) {
            case "Clear": {

                setWeatherState(hours >= 6 && hours <= 18 ? sunny : clear);
                break;
            }
            case "Clouds": {

                if (weatherData.description === "overcast clouds") {
                    setWeatherState(overcast);
                }
                else if (weatherData.description === "few clouds") {
                    setWeatherState(fewClouds);
                    setWeatherState(hours >= 6 && hours <= 18 ? fewClouds : fewNightClouds);
                }
                else if (weatherData.description === "scattered clouds") {
                    setWeatherState(scatteredClouds);
                }
                else if (weatherData.description === "broken clouds") {
                    setWeatherState(hours >= 6 && hours <= 18 ? brokenClouds : brokenNightClouds);
                }
                else {
                    setWeatherState(cloud);
                }
                break;
            }
            case "Smoke": {
                setWeatherState(smoke);
                break;
            }
            case "Snow": {
                setWeatherState(snow);
                break;
            }
            case "Thunderstorm": {
                setWeatherState(thunderstorm);
                break;
            }
            case "Haze": {
                setWeatherState(haze);
                break;
            }
            case "Drizzle": {
                setWeatherState(drizzle);
                break;
            }
            case "Mist": {
                setWeatherState(haze);
                break;
            }
            case "Rain": {
                if (weatherData.description === "light rain") {
                    setWeatherState(lightrain);
                } else if (weatherData.description === "moderate rain") {
                    setWeatherState(moderaterain);
                } else {
                    setWeatherState(heavyrain);
                }
                break;
            }
            default: {
                setWeatherState(sunny);
            }
        }
    }, [weatherData]);

    return (<div></div>)
}
