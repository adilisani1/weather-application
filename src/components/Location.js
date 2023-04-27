import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading/Loading";
export function Location({
    searchInput,
    units,
    getWeatherData,
    setLatitude,
    setLongitude,
    latitude,
    longitude
}) {

    const [hasLocationAccess, setHasLocationAccess] = useState(false);
    const [loading, setLoading] = useState(true);


    const geoLocationErr = () => toast.error("Geolocation is not supported in your environment ", {
        toastId: 'error2',
        position: "top-right",
        autoClose: 2000,
        pauseOnHover: false,

    });
    const cityErr = () => toast.error("Location Denied, Default location updating", {
        toastId: 'error3',
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,

    });

    useEffect(() => {
        const successCallback = (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setHasLocationAccess(true);
            setLoading(false);
        };

        const errorCallback = () => {
            cityErr();
            setLatitude(37.7749);
            setLongitude(-122.4194);
            setHasLocationAccess(true);
            setLoading(false);
        };

        const askForLocationAccess = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    successCallback,
                    errorCallback,
                    { enableHighAccuracy: true }
                );
            } else {
                geoLocationErr();
            }
        };

        askForLocationAccess();
    }, [setLatitude, setLongitude]);

    useEffect(() => {
        let timeoutId;
        if (latitude && longitude) {
            timeoutId = setTimeout(() => {
                getWeatherData();
            }, 1000);
        }

        return () => clearTimeout(timeoutId);
    }, [searchInput, units, latitude, longitude, getWeatherData]);


    if (!hasLocationAccess) {
        return <div><Loading /></div>;
    }


    if (loading) {
        return <div><Loading /></div>;
    }

    return <div></div>
}
