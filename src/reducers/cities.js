import {createSelector} from 'reselect';
import toPairs from 'lodash.topairs';
import {SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY} from '../actions/index';

export const cities =(state={}, action)=>{
    switch (action.type) {
        case SET_FORECAST_DATA:{
            const {city, forecastData}=action.value
            return{...state, [city]:{...state[city],forecastData, forecastDataDate:new Date()}}
        }
        case GET_WEATHER_CITY:{
            const city=action.value;
            return{...state, [city]:{...state[city],data:null}}
        }
        case SET_WEATHER_CITY:{
            const {city,data}=action.value
            return{...state,[city]:{...state[city],data}}
        }
        default:
            return state;
    }
}

export const setGetForecastDataFromCities=
createSelector((state, city)=> state[city] && state[city].forecastData,forecastData=>forecastData) 

const fromObjToArray=cities=>(toPairs(cities).map(([key,value])=>({key, name:key,data:value.data})))

export const getWeatherCities=createSelector(state=>fromObjToArray(state),cities=>cities)

