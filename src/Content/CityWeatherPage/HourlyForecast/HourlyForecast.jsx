import React from 'react';
import './HourlyForecast.css'

function HourlyForecast({ dt, temp, weather, }) {

    // transform time to human readable time
    const transformDate = (time) => {
        let date = new Date(time);
        var res = [date.getHours(), date.getMinutes()].map(function (x) {
            return x < 10 ? "0" + x : x
        }).join(":")
        return res
    }

    // set style for hourly weather
    let style = {
        top: -Math.round(temp),
        backgroundColor: (Math.round(temp) < 0 ? 'LightSeaGreen' :
            (Math.round(temp) == 0 ? 'MediumSpringGreen' : 'chartreuse'))
    }


    return (
        <div className='hourly-weather__item'>
            <div className="hourly-weather__time">
                <p className="hourly-weather__time-value">{transformDate(dt * 1000)}</p>
            </div>
            <div className="hourly-weather__icon">
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                    className="hourly-weather__img" />
            </div>
            <div className="hourly-weather__temp">

                <div className="hourly-weather__temp-line" style={style}>
                    <p className="hourly-weather__temp-value"> {Math.round(temp)} &#8451;
                    </p>
                </div>

            </div>
        </div>
    );
}

export default HourlyForecast;