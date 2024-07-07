import React, {useContext} from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from "axios";
import apiKey from "../../utils/key.tsx";
import styles from "./Map.module.scss"
import {ThemeContext} from "../../utils/ThemeContext.tsx";
import {IWeatherDataAPI} from "../../utils/InterfaceAPI";


export interface MarkerType {
    lat: number;
    lng: number;
}

interface MapProps {
    markers: MarkerType[];
    setNewMarker: (data: MarkerType) => void;
    setWeatherData: (data: IWeatherDataAPI) => void;
}

function Map({markers, setNewMarker, setWeatherData}: MapProps) {
    const { theme, setTheme } = useContext(ThemeContext);

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setNewMarker(e.latlng)
                console.log(`Latitude: ${lat}, Longitude: ${lng}`);
                axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=metric&key=${apiKey}`)
                    .then((data: IWeatherDataAPI) => (setWeatherData(data)))
                    .catch((err) => (console.log(err)))
            },
        });
        return null;
    };

    return (
        <div className={theme === 'light' ? styles['container-light'] : styles['container-dark']}>
            <h2>Also you can click on the map for selecting place in which you want to know weather forecast</h2>
            <div className={theme === 'light' ? styles['mapContainer-light'] : styles['mapContainer-dark']}>
        <MapContainer center={[49.3927, 15.5915]} zoom={6} className={theme === 'light' ? styles['map-light'] : styles['map-dark']}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, idx) => (
                <Marker key={idx} position={[marker.lat, marker.lng]} />
            ))}
            <MapEvents />
        </MapContainer>
            </div>
        </div>
    );
}

export default Map;
