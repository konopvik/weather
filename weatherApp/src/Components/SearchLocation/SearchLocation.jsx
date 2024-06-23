import {useContext, useEffect, useState} from "react";
import axios from "axios";
import apiKey from "../../utils/key.jsx"
import {ThemeContext} from "../../utils/ThemeContext.jsx";
import styles from './SearchLocation.module.scss'

const SearchLocation = ({weatherData, setWeatherData}) => {



    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jihlava?unitGroup=metric&key=${apiKey}`)
            .then((data) => (setWeatherData(data)))
            .catch((err) => (console.log(err)))
    }, [])
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <h2 className={theme === 'light' ? styles['text-light'] : styles['text-dark']}>Search Component</h2>
    )
}

export default SearchLocation