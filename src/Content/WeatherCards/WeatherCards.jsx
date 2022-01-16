import React from 'react';
import AddCards from './AddCard/AddCard';
import CardsPool from './CardsPool/CardsPool'
import './WeatherCards.css';

function WeatherCards(props) {
    return (
        <div className='container-fluid weather-cards' >
            <h2 className='weather-cards-title'>Weather cards</h2>
            <AddCards />
            <CardsPool />
        </div>
    );
}

export default WeatherCards;