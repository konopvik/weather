import './App.css'
import SearchLocation from "./Components/SearchLocation/SearchLocation.jsx";
import React, {useState} from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast.jsx";
import Map from "./Components/Map/Map.jsx";

function App() {

    const [weatherData, setWeatherData] = useState({})
    const [markers, setMarkers] = React.useState([]);
console.log("weatherData from app.jsx", weatherData)
  return (
    <>
      Weather App
        <SearchLocation weatherData={weatherData} setWeatherData={setWeatherData}/>
        {Object.keys(weatherData).length === 0 ? "" : <DailyForecast weatherData={weatherData}/>}
        <Map markers={markers} setMarkers={setMarkers} setWeatherData={setWeatherData}/>
    </>
  )
}

export default App
