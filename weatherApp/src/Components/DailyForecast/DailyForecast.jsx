import HourlyForecast from "../HourlyForecast/HourlyForecast.jsx";
import styles from "./DailyForecast.module.scss"
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext.jsx";

const DailyForecast = ({weatherData}) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const currentTime = weatherData.data.currentConditions.datetime.split(":");
    const twoDays = weatherData.data.days.slice(0,2)
    const hoursOfTwoDays = []
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 24; j++) {
            hoursOfTwoDays.push(twoDays[i].hours[j].datetime.split(":").slice(0,1))
            hoursOfTwoDays.push(twoDays[i].hours[j].temp)
            hoursOfTwoDays.push(twoDays[i].hours[j].icon)
        }
    }
    const formattedHoursOfTwoDays = []
    for (let i = 0; i < hoursOfTwoDays.length; i += 3) {
        const hour = hoursOfTwoDays[i][0]; // Get the hour (first element of the nested array)
        const temp = hoursOfTwoDays[i + 1]; // Get the temperature (next element in the array)
        const icon = hoursOfTwoDays[i + 2]; // Get the icon (next element in the array)
        formattedHoursOfTwoDays.push([hour, temp, icon]);
    }

    // Step 2: Find the index of currentTime
    const startIndex = formattedHoursOfTwoDays.findIndex(item => item[0] === currentTime[0]);

    // Step 3: Get the values from currentTime and the next two entries
    const result = formattedHoursOfTwoDays.slice(startIndex, startIndex + 24);


    console.log("result", result)
    return (

        <div className={theme === 'light' ? styles['root-light'] : styles['root-dark']}>
            <h3>Daily Forecast in {weatherData.data.address} for the day {weatherData.data.days[0].datetime}</h3>
            <div className={theme === 'light' ? styles['hourlyForecast-light'] : styles['hourlyForecast-dark']}>
                {result.map((hour) => {
                    return <HourlyForecast hourData={hour}/>
                })}
            </div>

        </div>
    )
}

export default DailyForecast