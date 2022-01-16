const defaulState = { arr: [] }

const DELETE_CITY = 'DELETE_CITY';
const ADD_CITY = 'ADD_CITY';
const REFRESH_CITY = 'REFRESH_CITY';



export const weatherDataReducer = (state = defaulState, action) => {

    switch (action.type) {
        case DELETE_CITY:
            return { ...state, arr: state.arr.filter(item => item.cityName !== action.payload) }
        case ADD_CITY:
            return { ...state, arr: [...state.arr, action.payload] }
        case REFRESH_CITY:
            return {
                ...state, arr: state.arr.map(item => {
                    if (item.cityName == action.payload.cityName) {
                        return (item = action.payload)
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
};


export const addNewCityAction = (payload) => ({ type: ADD_CITY, payload });
export const deleteCityAction = (payload) => ({ type: DELETE_CITY, payload });
export const refreshCityAction = (payload) => ({ type: REFRESH_CITY, payload });