import styles from "./HourlyForecast.module.scss"
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext.jsx";

const HourlyForecast = ({hourData}) => {

    //const time = hourData.datetime.split(":")
    const icons = [
        "🌨️",
        "🌧️",
        "🌫️",
        "💨",
        "☁️",
        "☁️☀️",
        "☁️🌙",
        "☀️",
        "🌙",
        ]
    const weather = [
        "snow",
        "rain",
        "fog",
        "wind",
        "cloudy",
        "partly-cloudy-day",
        "partly-cloudy-night",
        "clear-day",
        "clear-night"]
    const temp = Math.round(hourData[1])
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? styles['root-light'] : styles['root-dark']}>
            <div>{hourData[0]}:00</div>
            <div>{icons[weather.indexOf(hourData[2])]}</div>
            <div>{temp}°C</div>
        </div>
    )
}

export default HourlyForecast