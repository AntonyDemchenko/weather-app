import { createStore, combineReducers, applyMiddleware } from 'redux';
import { weatherDataReducer } from './weatherDataReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(weatherDataReducer, composeWithDevTools(applyMiddleware(thunk)));