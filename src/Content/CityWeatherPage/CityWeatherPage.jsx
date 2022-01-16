import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './CityWeatherPage.css';
import HourlyForecast from './HourlyForecast/HourlyForecast';

// import images
import tempIcon from './temp.png';
import sunIcon from './sun.png';
import windIcon from './wind.png';
import otherIcon from './other.png';
import windDir from './windDir.png';

function CityWeatherPage(props) {
    const API__KEY = '58fb3697d7e4c116ce683060fca13996';

    // set hourly forecast
    const [hourlyWeather, setHourlyWeather] = useState([])


    //get weather data of needed city
    const weather = JSON.parse(localStorage.getItem('page-info'));


    // rotate wind arrow
    let windDirection = weather.windDeg + 'deg'
    let rotate = { transform: `rotate(${windDirection})` }

    // transform time to human readable time
    const transformDate = (time) => {
        let date = new Date(time);
        var res = [date.getHours(), date.getMinutes()].map(function (x) {
            return x < 10 ? "0" + x : x
        }).join(":")
        return res
    }

    // request for hourly forecast data
    useEffect(() => {
        const hourlyRequest = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=daily,minutely,current,alerts&units=metric&appid=${API__KEY}`)
            const hourlyWeather = await res.json()
            let hourlyData = await hourlyWeather.hourly.slice(0, 24).filter((item, index, array) => index % 3 == 0)
            setHourlyWeather(hourlyData)
        }
        hourlyRequest()
    }, [])

    return (
        <div className='container-fluid page' >
            <h3 className='page-title'>City Weather Page</h3>
            <NavLink to='/' className='router-btn' > &lt;&lt;RETURN</NavLink>
            <div className="page-info">

                <div className='page-info-data'>
                    <div className="main-info  ">
                        <div className="main-info__img">
                            <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} />
                            <h5>{weather.weather}</h5>
                        </div>
                        <div className="main-info__temperature">
                            <h2>{Math.round(weather.temp)}&#8451;</h2>
                        </div>
                        <div className="main-info__titles">
                            <p className='main-info__last-update'>updated: {transformDate(weather.date)}</p>
                            <h2 className='main-info__city-name'>{weather.cityName}</h2>
                        </div>
                    </div>

                    <div className="hourly-weather">
                        {hourlyWeather.map(item => <HourlyForecast key={item.dt} {...item} />)}

                    </div>

                    <div className="other-info">

                        <div className="other-info__row temp">

                            <img src={tempIcon} className='row-img' />
                            <p className="other-info__item">max temp.
                                <span className='data'>{Math.round(weather.temp_max)}&#8451;</span>
                            </p>
                            <p className="other-info__item">min temp.
                                <span className='data'>{Math.round(weather.temp_min)}&#8451;</span>
                            </p>
                            <p className="other-info__item">feels like
                                <span className='data'>{Math.round(weather.temp_feels)}&#8451;</span>
                            </p>
                        </div>

                        <div className="other-info__row sun">

                            <img src={sunIcon} className='row-img' />
                            <p className="other-info__item">sunrise
                                <span className='data'>{transformDate(weather.sunrise * 1000)}</span>
                            </p>
                            <p className="other-info__item">sunset
                                <span className='data'>{transformDate(weather.sunset * 1000)}</span>
                            </p>
                            <p className="other-info__item">day langth
                                <span className='data'>{transformDate(weather.sunset * 1000 - weather.sunrise * 1000)}</span>
                            </p>
                        </div>

                        <div className="other-info__row wind">

                            <img src={windIcon} className='row-img' />
                            <p className="other-info__item">direction

                                <img src={windDir} className='row-img' style={rotate} />
                            </p>
                            <p className="other-info__item">gust
                                <span className='data'>{weather.windGust}</span>
                            </p>
                            <p className="other-info__item">speed
                                <span className='data'>{weather.windSpeed}</span>
                            </p>
                        </div>

                        <div className="other-info__row others">

                            <img src={otherIcon} className='row-img' />
                            <p className="other-info__item">clouds
                                <span className='data'>{weather.clouds}%</span>
                            </p>
                            <p className="other-info__item">humidity
                                <span className='data'>{weather.humidity}%</span>
                            </p>
                            <p className="other-info__item">pressure
                                <span className='data'>{weather.pressure}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="page-ads">
                    <h3>here could be your advertising ;&#41; </h3>
                </div>

            </div>

        </div >
    );
}

export default CityWeatherPage;