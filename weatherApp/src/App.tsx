import SearchLocation from "./Components/SearchLocation/SearchLocation.js";
import React, {useContext, useState} from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast.js";
import Map from "./Components/Map/Map.js";
import styles from "./App.module.scss"
import { ThemeContext } from "./utils/ThemeContext.js";
import ToggleTheme from "./Components/ToggleTheme/ToggleTheme.js";
import UVIndexWidget from "./Components/UVIndexWidget/UVIndexWidget.js";
import WindSpeedWidget from "./Components/WindSpeedWidget/WindSpeedWidget.js";
import {IWeatherDataAPI} from "./utils/InterfaceAPI";

function App() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [weatherData, setWeatherData] = useState<IWeatherDataAPI | null>(null)
    const [markers, setMarkers] = React.useState([]);
console.log("weatherData from app.jsx", weatherData)


  return (
      <div className={theme === 'light' ? styles['appContainer-light'] : styles['appContainer-dark']}>
          <div className={theme === 'light' ? styles['header-light'] : styles['header-dark']}>
              <h1 className={theme === 'light' ? styles['headerH1-light'] : styles['headerH1-dark']}>Weather App</h1>
              <div className={theme === 'light' ? styles['headerButton-light'] : styles['headerButton-dark']}><ToggleTheme/></div>
          </div>
          <SearchLocation weatherData={weatherData} setWeatherData={setWeatherData}/>
          {weatherData === null ? "" : <DailyForecast weatherData={weatherData}/>}
          <Map markers={markers} setMarkers={setMarkers} setWeatherData={setWeatherData}/>
          <UVIndexWidget weatherData={weatherData}/>
          <WindSpeedWidget weatherData={weatherData}/>
      </div>
  )
}
// Object.keys(weatherData).length === 0
export default App
