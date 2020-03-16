import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//import PropTypes from 'prop-types';
import './styles.css';

const WeatherData=({city,data})=>(
            <div className='weatherDataCont'>
                <WeatherTemperature 
                name={city}
                temp={data.temp}
                stateW={data.weatherState}
                />
                <WeatherExtraInfo 
                humidity={data.humidity} 
                wind={`${data.wind} m/s`}
                />
            </div>
)

export default WeatherData;