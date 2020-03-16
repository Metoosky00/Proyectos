import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/WeatherData';
import './styles.css';
const WeatherLocation =({onWeatherLocationClick,city,data})=>(
                <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                    <Location city={city}/>
                    {
                        data &&
                        <WeatherData data={data}/>
                    }
                </div>
)

WeatherLocation.propTypes={
    city:PropTypes.string,
    _onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;