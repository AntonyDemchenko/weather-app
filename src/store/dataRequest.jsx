const API__KEY = '58fb3697d7e4c116ce683060fca13996';

const serverRequest = (city, dispatchType) => {

    return function (dispatch) {
        const sityName = city;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sityName}&appid=${API__KEY}&units=metric`)
            .then(res => res.json())
            .then(weatherData => {
                // console.log(weatherData)
                let sortedData;
                return (sortedData = {
                    cityName: weatherData.name,
                    id: weatherData.id,
                    coord: weatherData.coord,
                    humidity: weatherData.main.humidity,
                    pressure: weatherData.main.pressure,
                    temp: weatherData.main.temp,
                    temp_max: weatherData.main.temp_max,
                    temp_min: weatherData.main.temp_min,
                    temp_feels: weatherData.main.feels_like,
                    sunrise: weatherData.sys.sunrise,
                    sunset: weatherData.sys.sunset,
                    weather: weatherData.weather[0].description,
                    clouds: weatherData.clouds.all,
                    icon: weatherData.weather[0].icon,
                    visibility: weatherData.visibility,
                    windDeg: weatherData.wind.deg,
                    windGust: weatherData.wind.gust,
                    windSpeed: weatherData.wind.speed,
                    date: new Date(),
                })
            })
            .then(weatherObj => dispatch({ type: dispatchType, payload: weatherObj }))

    }
}

export default serverRequest;