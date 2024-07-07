import HourlyForecast from "../HourlyForecast/HourlyForecast.tsx";
import styles from "./DailyForecast.module.scss"
import {useContext} from "react";
import {ThemeContext} from "../../utils/ThemeContext.tsx";
import {IDay, IWeatherDataAPI} from "../../utils/InterfaceAPI";

interface IProps {
    weatherData: IWeatherDataAPI
}

const DailyForecast = ({weatherData}: IProps) => {
    const {theme, setTheme} = useContext(ThemeContext);

        const currentTime: string[] = weatherData.data.currentConditions.datetime.split(":");
        const twoDays: IDay[] = weatherData.data.days.slice(0, 2)
        const hoursOfTwoDays = []
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 24; j++) {
                hoursOfTwoDays.push(twoDays[i].hours[j].datetime.split(":").slice(0, 1))
                hoursOfTwoDays.push(twoDays[i].hours[j].temp)
                hoursOfTwoDays.push(twoDays[i].hours[j].icon)
            }
        }
        const formattedHoursOfTwoDays = []
        for (let i = 0; i < hoursOfTwoDays.length; i += 3) {
            const hour = hoursOfTwoDays[i][0];
            const temp = hoursOfTwoDays[i + 1];
            const icon = hoursOfTwoDays[i + 2];
            formattedHoursOfTwoDays.push([hour, temp, icon]);
        }

        const startIndex: number = formattedHoursOfTwoDays.findIndex(item => item[0] === currentTime[0]);

        const result: number[] = formattedHoursOfTwoDays.slice(startIndex, startIndex + 24);

        return (
                <div className={theme === 'light' ? styles['root-light'] : styles['root-dark']}>
                    <h3>Daily Forecast in {weatherData.data.address} for the
                        day {weatherData.data.days[0].datetime}</h3>
                    <div className={theme === 'light' ? styles['hourlyForecast-light'] : styles['hourlyForecast-dark']}>
                        {result.map((hour: number) => {
                            return <HourlyForecast hourData={hour}/>
                        })}
                    </div>
                </div>
        )

}

export default DailyForecast