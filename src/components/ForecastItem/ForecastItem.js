import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData/WeatherData';

const ForecastItem =({weekDay, hour,data,city })=>(
    <div>
        <h2>
            {weekDay} - {hour} hs
        </h2>
        <WeatherData city ={city} data={data}/>
    </div>
)

ForecastItem.propTypes={
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired
}

export default ForecastItem;