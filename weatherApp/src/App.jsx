import SearchLocation from "./Components/SearchLocation/SearchLocation.jsx";
import React, {useContext, useState} from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast.jsx";
import Map from "./Components/Map/Map.jsx";
import styles from "./App.module.scss"
import { ThemeContext } from "./utils/ThemeContext.jsx";

function App() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [weatherData, setWeatherData] = useState({})
    const [markers, setMarkers] = React.useState([]);
console.log("weatherData from app.jsx", weatherData)
  return (
      <div className={styles.appContainer}>
          Weather App
          <SearchLocation weatherData={weatherData} setWeatherData={setWeatherData}/>
          {Object.keys(weatherData).length === 0 ? "" : <DailyForecast weatherData={weatherData}/>}
          <Map markers={markers} setMarkers={setMarkers} setWeatherData={setWeatherData}/>
          <div>
              Current theme: {theme}
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  Toggle Theme
              </button>
          </div>
      </div>
  )
}

export default App
