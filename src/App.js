import { useState } from 'react';
import Header from "./component/Header";
import Weather from "./component/Weather";

function App() {

  const [searchWeather, setSearchWeather] = useState("Karachi");

  return (
    <div className="App">

      <Header
        searchWeather={searchWeather}
        setSearchWeather={setSearchWeather} />

      <Weather
        searchWeather={searchWeather} />
    </div>
  );
}

export default App;
