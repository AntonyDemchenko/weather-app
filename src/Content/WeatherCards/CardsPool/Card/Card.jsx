import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
import imgReload from './reload.png';
import imgCross from './cross.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCityAction, refreshCityAction, addNewCityAction } from '../../../../store/weatherDataReducer'
import serverRequest from "../../../../store/dataRequest";


function Card(props) {
    const dispatch = useDispatch();

    const item = props.props;

    // set data weather for city-page
    const goToPage = () => {
        localStorage.setItem('page-info', JSON.stringify(item));
    }

    return (
        <div className='container-fluid card' >
            <div className='card-btns'>
                <button className='update-btn' onClick={() => {
                    const dispatchType = 'REFRESH_CITY';
                    dispatch(serverRequest(item.cityName, dispatchType))
                }}>
                    <img src={imgReload} className='card-btn-img' />
                </button>
                <button className='delete-btn' onClick={() => dispatch(deleteCityAction(item.cityName))}>
                    <img src={imgCross} className='card-btn-img' />
                </button>
            </div>
            <h3 className='city-name'>{item.cityName}</h3>
            <img className='weather-img' src={`http://openweathermap.org/img/w/${item.icon}.png`} />
            <p className='weather'>{item.weather}</p>
            <p className='temperature'>{Math.round(item.temp)}&#8451;</p>
            <NavLink to='/page' className='router-btn' onClick={() => goToPage()}>SHOW MORE</NavLink>
        </div>
    );
}

export default Card;