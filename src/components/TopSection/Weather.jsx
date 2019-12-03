import React from "react";
import "./Weather.scss";

const Weather = ({ locationCity, locationCountry, temperature, description, iconURL }) => (
        <div className="weather-container">
            <div className="header">{ locationCity }, { locationCountry }</div>
            <div className="inner-container">
                <div className="image">
                    <img src={ iconURL } alt="weather_image"/>
                </div>
                <div className="current-weather">{ temperature }°</div>
            </div>
            <div className="footer">{ description }</div>
        </div>
);

export default Weather;