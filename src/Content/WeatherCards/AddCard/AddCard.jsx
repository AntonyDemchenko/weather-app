import React from 'react';
import './AddCard.css';
import serverRequest from "../../../store/dataRequest";
import { useDispatch, useSelector } from 'react-redux';



function AddCard(props) {

    const cities = useSelector(state => state.arr);
    let citiesNames = cities.map(item => item.cityName.toLowerCase())

    const dispatch = useDispatch();

    // clear input after submit
    const cleanInput = (e) => {
        e.target.elements.city.value = ''
    }

    return (
        <div className='container-fluid add-card' style={{ border: '1px solid grey' }}>
            <form className='add-card-form' onSubmit={(e) => {
                e.preventDefault();
                const city = e.target.elements.city.value.toLowerCase();
                if (!citiesNames.includes(city)) {
                    const dispatchType = 'ADD_CITY';
                    dispatch(serverRequest(city, dispatchType));
                }
                cleanInput(e)
            }}>
                <input type="text" name='city' placeholder='city' className='add-card-input' minLength={2} />
                <button className='add-card-submit' > ADD CITY</button>
            </form>
        </div>
    );
}

export default AddCard;