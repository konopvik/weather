import HourlyForecast from "../HourlyForecast/HourlyForecast.jsx";
import styles from "./DailyForecast.module.scss"

const DailyForecast = ({weatherData}) => {
    return (
        <div className={styles.root}>
            <div>Daily Forecast in {weatherData.data.address} for the day {weatherData.data.days[0].datetime}</div>
            <div className={styles.hourlyForecast}>
                {weatherData.data.days[0].hours.map((hour) => {
                    return <HourlyForecast hourData={hour}/>
                })}
            </div>

        </div>
    )
}

export default DailyForecast