
// new ForecastCard component
// export const ForecastCard = ({ date, main, description, temp }) => {
//     const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
//     const day = date.getDate();
//     const weatherIcon = getWeatherIcon(main, description);

//     return (
//         <div className=" img-card">
//             <div className="forecast-card">
//                 <div className="card-body">
//                     <h5 className="day">{`${day} ${weekday}`}</h5>
//                 </div>
//                 <div className="icon-img">
//                     <img className="icons" src={weatherIcon} alt="weather-icon" />
//                 </div>
//                 <div className="card-body">
//                     <h5 className="deg-feel">{`${parseInt(temp?.toFixed(2))}`}°</h5>
//                     <p className="stats">{`${description}`}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };






