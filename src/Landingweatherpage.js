import React, { Component } from 'react';
import './weather.css';
import {Container,Row,Col} from 'react-grid-system';
import Weathersummary from './Components/Weathersummary';
import Inputlocation from './Components/Inputlocation';
class Weather extends Component {

    render() {
    
        return ( <div> <Inputlocation /> </div>);
    
    }
}

export default Weather;