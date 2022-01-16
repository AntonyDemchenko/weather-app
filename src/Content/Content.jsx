import React from 'react';
import './Content.css';
import WeatherCards from './WeatherCards/WeatherCards';
import CityWeatherPage from './CityWeatherPage/CityWeatherPage';
import { Routes, Route, Link } from 'react-router-dom';

function Content() {

    return (
        <div className="container-fluid content">
            <h2 className='container-title'>Use this app to see the weather in any city in the world!</h2>
            <Routes>
                <Route path="/" exact element={<WeatherCards />} ></Route>
                <Route path="/page" element={<CityWeatherPage />} ></Route>
            </Routes>

        </div>
    );
}

export default Content;