import {useContext, useEffect, useState} from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import apiKey from "../../utils/key.jsx"
import {ThemeContext} from "../../utils/ThemeContext.jsx";
import styles from './SearchLocation.module.scss'

const SearchLocation = ({weatherData, setWeatherData}) => {

    const [axiosError, setAxiosError] = useState(null);
    const { theme, setTheme } = useContext(ThemeContext);
    const { register, handleSubmit,formState: { errors } } = useForm()

    const axiosThen = (data) => {
        setWeatherData(data);
        setAxiosError(null);
    }

    const onSubmitClick = (formData) => {
        axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${formData.city}?unitGroup=metric&key=${apiKey}`)
            .then((data) => (axiosThen(data)))
            .catch((err) => {
                if (err.response.status === 400 && err.response.data === "Bad API Request:Invalid location parameter value.")
                setAxiosError("Invalid location parameter value.")
                else {
                    setAxiosError(err.response.data)
                }
            })
    };
    return (
        <>
            <h2 className={theme === 'light' ? styles['text-light'] : styles['text-dark']}>Search Component</h2>
            <form onSubmit={handleSubmit(onSubmitClick)} className={styles.form}>
                <input className={theme === 'light' ? styles['input-light'] : styles['input-dark']} {...register("city", { required: true })} placeholder="Search city" />
                {errors.city?.type === "required" && (
                    <p className={theme === 'light' ? styles['error-light'] : styles['error-dark']}>City is required</p>
                ) || (
                    <p className={theme === 'light' ? styles['error-light'] : styles['error-dark']}>{axiosError}</p>
                )}
                <input className={theme === 'light' ? styles['button-light'] : styles['button-dark']} type="submit" value="Find forecast" />
            </form>
        </>
    )
}

export default SearchLocation