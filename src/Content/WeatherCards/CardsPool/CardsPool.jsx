import React from 'react';
import Card from './Card/Card';
import './CardsPool.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'


function CardsPool(props) {
    const cities = useSelector(state => state.arr);

    // save cities in localstorage
    useEffect(() => {
        const savedCities = cities.map(item => item.cityName)
        if (savedCities.length > 0) {
            localStorage.setItem('saved-cities', savedCities)
        }
    }, [cities])


    return (
        <div className='container-fluid cards-pool' >
            {cities.map(item => {
                // console.log(item.id)
                return (<Card key={item.id} props={item} />);
            }
            )}

        </div>
    );
}

export default CardsPool;