import SearchLocation from "./Components/SearchLocation/SearchLocation.jsx";
import React, {useContext, useState} from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast.jsx";
import Map from "./Components/Map/Map.jsx";
import styles from "./App.module.scss"
import { ThemeContext } from "./utils/ThemeContext.jsx";
import ToggleTheme from "./Components/ToggleTheme/ToggleTheme.jsx";
import UVIndexWidget from "./Components/UVIndexWidget/UVIndexWidget.jsx";
import WindSpeedWidget from "./Components/WindSpeedWidget/WindSpeedWidget.jsx";

function App() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [weatherData, setWeatherData] = useState({})
    const [markers, setMarkers] = React.useState([]);
console.log("weatherData from app.jsx", weatherData)


  return (
      <div className={theme === 'light' ? styles['appContainer-light'] : styles['appContainer-dark']}>
          <div className={theme === 'light' ? styles['header-light'] : styles['header-dark']}>
              <h1 className={theme === 'light' ? styles['headerH1-light'] : styles['headerH1-dark']}>Weather App</h1>
              <div className={theme === 'light' ? styles['headerButton-light'] : styles['headerButton-dark']}><ToggleTheme/></div>
          </div>
          <SearchLocation weatherData={weatherData} setWeatherData={setWeatherData}/>
          {Object.keys(weatherData).length === 0 ? "" : <DailyForecast weatherData={weatherData}/>}
          <Map markers={markers} setMarkers={setMarkers} setWeatherData={setWeatherData}/>
          <UVIndexWidget weatherData={weatherData}/>
          <WindSpeedWidget weatherData={weatherData}/>
      </div>
  )
}

export default App
