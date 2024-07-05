import React from 'react';
import styles from './WindSpeedWidget.module.scss';

const WindSpeedWidget = ({ weatherData }) => {
    if (!weatherData || !weatherData.data || !weatherData.data.currentConditions) {
        return <div>Loading...</div>;
    }

    const windSpeed = weatherData.data.currentConditions.windspeed;
    const windDirection = weatherData.data.currentConditions.winddir; // Assuming direction is in degrees

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
