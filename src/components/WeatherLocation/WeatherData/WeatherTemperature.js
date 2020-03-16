import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class WeatherTemperature extends React.Component{
    render(){
        const {name,temp,stateW}=this.props
        return(
            <div className='weatherTemperatureCont'>
                <img 
                    alt={name}
                    className='wicon'
                    src={stateW}
                    />                       
            <span className='temperatura'>{` ${temp}`}</span>
            <span className='temperaturetype'>°C</span>
        </div>
        )
    }
}

export default WeatherTemperature;