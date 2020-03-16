import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/WeatherLocation';
import './styles.css';

const LocationList = ({cities,onSelectedLocation}) =>{

    const _handleWeatherLocationCick=city=>{
        onSelectedLocation(city)
    }

    const stringToComponent=cities=>(
        cities.map(city=>(
            <WeatherLocation 
            key ={city.key} 
            city={city.name}
            onWeatherLocationClick={()=>_handleWeatherLocationCick(city.name)}
            data={city.data}
            />
        ))
    )
        return(
            <div className='locationList'>
                {stringToComponent(cities)}
            </div>
        );    
}

LocationList.propTypes={
    cities:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func
}

export default LocationList;