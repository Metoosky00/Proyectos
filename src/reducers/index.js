import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {cities, 
    setGetForecastDataFromCities as _setGetForecastDataFromCities,
    getWeatherCities as _getWeatherCities
} from './cities';
import {city} from './city';

export default combineReducers({
    cities,
    city
})

export const getCity =createSelector(state=>state.city, city=>city)
export const setGetForecastDataFromCities =createSelector(state=>state.cities,getCity,_setGetForecastDataFromCities)
export const getWeatherCities= createSelector(state=>state.cities,_getWeatherCities)