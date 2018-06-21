import React, { Component } from 'react';
import * as moment from 'moment';
class Weathersummary extends Component {
    fetchweatherdetails = () =>
    {
                console.log("buttonworking");
    }
    render() {
        this.state={
            city:null,
            description:null
        };
        return (
            <div>
            <button onClick={this.fetchweatherdetails}>weather summary</button>
            </div>
        );
    }
}

export default Weathersummary;