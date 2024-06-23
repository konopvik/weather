import React, {useContext} from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from "axios";
import apiKey from "../../utils/key.jsx";
import styles from "./Map.module.scss"
import {ThemeContext} from "../../utils/ThemeContext.jsx";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Map({markers, setMarkers, setWeatherData}) {
    const { theme, setTheme } = useContext(ThemeContext);

    const MapEvents = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setMarkers((current) => [...current, { lat, lng }]);
                console.log(`Latitude: ${lat}, Longitude: ${lng}`);
                axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=metric&key=${apiKey}`)
                    .then((data) => (setWeatherData(data)))
                    .catch((err) => (console.log(err)))
            },
        });
        return null;
    };

    return (
        <div className={theme === 'light' ? styles['container-light'] : styles['container-dark']}>
            <h2>Also you can click on the map for selecting place in which you want to know weather forecast</h2>
            <div className={theme === 'light' ? styles['mapContainer-light'] : styles['mapContainer-dark']}>
        <MapContainer center={[51.505, -0.09]} zoom={5} className={theme === 'light' ? styles['map-light'] : styles['map-dark']}>
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
