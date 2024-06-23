import HourlyForecast from "../HourlyForecast/HourlyForecast.jsx";
import styles from "./DailyForecast.module.scss"
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext.jsx";

const DailyForecast = ({weatherData}) => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? styles['root-light'] : styles['root-dark']}>
            <h3>Daily Forecast in {weatherData.data.address} for the day {weatherData.data.days[0].datetime}</h3>
            <div className={theme === 'light' ? styles['hourlyForecast-light'] : styles['hourlyForecast-dark']}>
                {weatherData.data.days[0].hours.map((hour) => {
                    return <HourlyForecast hourData={hour}/>
                })}
            </div>

        </div>
    )
}

export default DailyForecast