import React, { useState } from 'react';
import "./WeatherApp.css";
import axios from 'axios';

const WeatherApp = () => {

    const [city, setCity] = useState("");

    const [weather, setWeather] = useState();

    const [temperatureResult, setTemperatureResult] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'89b3b11d5a86cf0f9b191636f3397c9e'}`);
            setWeather(response);
            console.log(response);
        } catch {
            error("Error fetching data");
        }
    }

    const GetWeatherData = (e) => {
        e.preventDefault();
        fetchWeather();
    }

    return (
        <div>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='text-center'>
                        <form className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control" value={city} id="weatherid" onChange={handleChange} placeholder="Enter city" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" onClick={GetWeatherData}>Get Weather</button>
                        </form>
                    </div>
                </div>
                {weather &&
                    <div className='text-center'>
                        <p>{weather.data.name}</p>
                        <p>Temp is {weather.data.main.temp}</p>
                        <p>{weather.data.weather[0].description}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default WeatherApp