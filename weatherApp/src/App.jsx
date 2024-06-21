import './App.css'
import SearchLocation from "./Components/SearchLocation/SearchLocation.jsx";
import {useState} from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast.jsx";

function App() {

    const [weatherData, setWeatherData] = useState({})
console.log("weatherData from app.jsx", weatherData)
  return (
    <>
      Weather App
        <SearchLocation weatherData={weatherData} setWeatherData={setWeatherData}/>
        {Object.keys(weatherData).length === 0 ? "" : <DailyForecast weatherData={weatherData}/>}
    </>
  )
}

export default App
