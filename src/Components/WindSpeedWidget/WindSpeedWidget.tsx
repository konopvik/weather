import React from 'react';
import styles from './WindSpeedWidget.module.scss';
import {IWeatherDataAPI} from "../../utils/InterfaceAPI";

interface IProps {
    weatherData: IWeatherDataAPI
}
const WindSpeedWidget = ({ weatherData }: IProps) => {
    if (!weatherData || !weatherData.data || !weatherData.data.currentConditions) {
        return <div>Loading...</div>;
    }

    const windSpeed: number = weatherData.data.currentConditions.windspeed;
    const windDirection: number = weatherData.data.currentConditions.winddir;

    return (
        <div className={styles.windWidget}>
            <div className={styles.windHeader}>WIND</div>
            <div className={styles.compass}>
                <div className={styles.compassDirection}>N</div>
                <div className={styles.compassDirection}>E</div>
                <div className={styles.compassDirection}>S</div>
                <div className={styles.compassDirection}>W</div>
                <div
                    className={styles.windArrow}
                    style={{ transform: `rotate(${windDirection}deg)` }}
                >
                    ➤
                </div>
            </div>
            <div className={styles.windSpeed}>{windSpeed} km/h</div>
        </div>
    );
};

export default WindSpeedWidget;
