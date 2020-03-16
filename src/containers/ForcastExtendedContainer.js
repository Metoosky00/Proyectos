import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ForcastExtended from '../components/ForcastExtended';
import {setGetForecastDataFromCities, getCity} from '../reducers';

class ForcastExtendedContainer extends Component {
    render() {
        const {city,forecastData}=this.props
        //console.log('forecastData de ForecastExtendedContainer')
        //console.log(forecastData) //aqui si se estan mapeando los datos
        return (
            city &&
            <ForcastExtended city={city} forecastData={forecastData}/>
        );
    }
}

ForcastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array
};

const mapStateToProps=state=>({
    city:getCity(state),
    forecastData: setGetForecastDataFromCities(state)
})

export default connect(mapStateToProps,null) (ForcastExtendedContainer);