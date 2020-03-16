import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {getWeatherCities, getCity} from '../reducers'
import LocationList from '../components/LocationList';

class LocationListContaier extends Component {
    componentDidMount(){
      const {setWeather,setSelectedCity,cities,city}=this.props
      setWeather(cities)
      setSelectedCity(city);
    }
    _handleSelectionLocation=city=>{
        this.props.setSelectedCity(city)
      }
    render() {
        const {citiesWeather}=this.props
        return (
            <LocationList 
            cities={citiesWeather}
            onSelectedLocation={this._handleSelectionLocation}
            />
        );
    }
}

LocationListContaier.propTypes = {
    setSelectedCity:PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
    citiesWeather:PropTypes.array,
    city:PropTypes.string.isRequired
  }



  const mapDispatchToProps=dispatch=>bindActionCreators(actions,dispatch);
  
  /*const mapDispatchToProps=dispatch=>(
    {
    dispatchSetCity:value=>dispatch(setSelectedCity(value)),
    setWeather: value=>dispatch(setWeather(value))
    }
  )*/
    const mapStateToProps=state=>({
      citiesWeather:getWeatherCities(state),
      city:getCity(state)
    })
  export default connect(mapStateToProps,mapDispatchToProps)(LocationListContaier)