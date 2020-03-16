import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import ForecastItem from './ForecastItem/ForecastItem';

const renderForecastItemDays=(city,forecastData)=>{
    return forecastData.map(forecast=>(
             <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                city={city}
                data={forecast.data}
                hour={forecast.hour} 
                weekDay={forecast.weekDay}
            >
                </ForecastItem>
    ))
    
}

const renderProgress=()=>{
    return <h3>Cargando Pronostico extendido..</h3>
}

const ForcastExtended =({city,forecastData})=>(
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {
                forecastData?
                renderForecastItemDays(city,forecastData)
                :renderProgress()
                }
            </div>
)

ForcastExtended.propTypes={
    city:PropTypes.string.isRequired,
    forecast:PropTypes.array
}

export default ForcastExtended;