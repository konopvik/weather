import styles from "./UVIndexWidget.module.scss"
const UVIndexWidget = ({ weatherData }) => {
    const getUVLevelInfo = (uvIndex) => {
        if (uvIndex <= 2) {
            return 'LOW';
        } else if (uvIndex <= 5) {
            return 'MEDIUM';
        } else if (uvIndex <= 7) {
            return 'HIGH';
        } else if (uvIndex <= 10) {
            return 'VERY HIGH';
        } else {
            return 'EXTREME';
        }
    };

    if (!weatherData || !weatherData.data || !weatherData.data.currentConditions) {
        return <div>Loading...</div>;
    }

    const uvIndex = weatherData.data.currentConditions.uvindex;
    const uvLevel = getUVLevelInfo(uvIndex)

    return (
        <div className={styles.uvWidget}>
            <div className={styles.uvHeader}>UV INDEX</div>
            <div className={styles.uvValue}>{uvIndex}</div>
            <div className={styles.uvLevel}>{uvLevel}</div>
            <div className={styles.uvBar}>
                <div className={styles.uvIndicator} style={{ left: `${(uvIndex / 11) * 100}%` }}></div>
            </div>
            <div className={styles.uvProtection}>{uvIndex > 3 ? "Use sun protection" : ""}</div>
        </div>
    );
}

export default UVIndexWidget
