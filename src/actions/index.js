import transformForecaste from '../services/TransformForecast';
import transformWeather from '../services/transformWeather';

export const SET_CITY='SET_CITY';// Constante para saber de que tipo de accion se esta hablando
export const SET_FORECAST_DATA='SET_FORECAST_DATA';
export const SET_WEATHER='SET_WEATHER';
export const GET_WEATHER_CITY='GET_WEATHER_CITY';
export const SET_WEATHER_CITY='SET_WEATHER_CITY';

const setCity=value=> ({type: SET_CITY, value})
const setForecastData=value=>({type:SET_FORECAST_DATA, value})

const getWeatherCity=value=>({type:GET_WEATHER_CITY,value})
const setWeatherCity=value=>({type:SET_WEATHER_CITY,value})

const API_KEY='1cd292e97f73001c73a09c47591320b5';

export const setSelectedCity=value=>{
    //console.log(value)
    return (dispatch, getState)=>{
        dispatch(setCity(value))
        const state=getState();
        const date=state.cities[value] && state.cities[value].forecastDataDate
        const now= new Date()
        if(date && (now-date)< 1*60*1000){
            return;
        }
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then((result) => {
        const forecastData=transformForecaste(result)
        dispatch(setForecastData({city:value, forecastData}))
        //console.log(forecastData)
          });
    }
}

export const setWeather= value=>{
    return dispatch=>{
        value.forEach(city=>{
            dispatch(getWeatherCity(city))
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then((result) => {
            const data=transformWeather(result)
            dispatch(setWeatherCity({city, data}))
    })
})
}
}
