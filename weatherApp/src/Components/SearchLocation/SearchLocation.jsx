import {useEffect, useState} from "react";
import axios from "axios";
import apiKey from "../../utils/key.jsx"

const SearchLocation = ({weatherData, setWeatherData}) => {



    useEffect(() => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Jihlava?unitGroup=metric&key=${apiKey}`)
            .then((data) => (setWeatherData(data)))
            .catch((err) => (console.log(err)))
    }, [])

    return (
        <div>Search Component</div>
    )
}

export default SearchLocation