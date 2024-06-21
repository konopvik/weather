import styles from "./HourlyForecast.module.scss"

const HourlyForecast = ({hourData}) => {

    const time = hourData.datetime.split(":")
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

    const temp = Math.round(hourData.temp)
    return (
        <div className={styles.root}>
            <div>{time[0]}:{time[1]}</div>
            <div>{icons[weather.indexOf(hourData.icon)]}</div>
            <div>{temp}°C</div>
        </div>
    )
}

export default HourlyForecast